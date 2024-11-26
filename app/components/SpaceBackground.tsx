'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SpaceBackground = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        
        // Create gradient background
        const gradientTexture = new THREE.CanvasTexture(createGradientCanvas());
        scene.background = gradientTexture;

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 30000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4); // Reduced from 0.8 to 0.4
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); // Reduced from 1.2 to 0.8
        directionalLight.position.set(10, 20, 10);
        scene.add(directionalLight);

        // Create Earth
        const earthTexture = new THREE.TextureLoader().load("https://st4.depositphotos.com/25825766/39166/i/1600/depositphotos_391666806-stock-photo-world-texture-satellite-image-earth.jpg");
        const earthGeometry = new THREE.SphereGeometry(2000, 64, 64);
        const earthMaterial = new THREE.MeshStandardMaterial({
            map: earthTexture,
            emissive: 0x000000,
            metalness: 0.5,
            roughness: 7
        });
        const earth = new THREE.Mesh(earthGeometry, earthMaterial);
        earth.position.set(0, 0, -3000);
        earth.rotation.y = Math.PI + Math.PI/6 + Math.PI/9; // Start with Africa facing camera, offset by 50 degrees total
        scene.add(earth);

        // Create asteroids
        const asteroids: THREE.Mesh[] = [];
        const asteroidCount = 1000;
        const asteroidTexturePlaceholder = "https://i.imghippo.com/files/BipE5042PY.jpg";
        
        // Function to downscale a texture
        function loadAndDownscaleTexture(url: string, scale = 1) {
            const loader = new THREE.TextureLoader();
            return new Promise<THREE.Texture>((resolve) => {
                loader.load(url, (texture) => {
                    texture.generateMipmaps = true;
                    texture.minFilter = THREE.LinearMipMapLinearFilter;
                    texture.magFilter = THREE.LinearFilter;
                    texture.wrapS = THREE.RepeatWrapping;
                    texture.wrapT = THREE.RepeatWrapping;
                    
                    // Calculate aspect ratio and adjust repeat
                    const aspectRatio = texture.image.width / texture.image.height;
                    texture.repeat.set(aspectRatio, 1);
                    texture.offset.set((1 - aspectRatio) / 2, 0);
                    
                    const maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
                    texture.anisotropy = maxAnisotropy;
                    resolve(texture);
                });
            });
        }
        
        // Create asteroids with initial material
        for (let i = 0; i < asteroidCount; i++) {
            const size = Math.random() * 25 + 4; // Increased size variation
            const asteroidGeometry = new THREE.SphereGeometry(size, 12, 12);
            const initialMaterial = new THREE.MeshStandardMaterial({ 
                color: 0x808080,
                metalness: 0.3,
                roughness: 0.8
            });
            const asteroid = new THREE.Mesh(asteroidGeometry, initialMaterial);

            // Position asteroids in a wider sphere around Earth
            const distance = 2250 + Math.random() * 1500; // Adjusted for larger Earth
            const angle = Math.random() * Math.PI * 2;
            const height = (Math.random() - 0.5) * 600; // Adjusted height range

            asteroid.position.set(
                distance * Math.cos(angle),
                height,
                distance * Math.sin(angle) - 3000 // Adjusted to match new Earth position
            );

            const userData = {
                velocity: new THREE.Vector3(
                    -Math.sin(angle) * 0.1,
                    (Math.random() - 0.5) * 0.02,
                    Math.cos(angle) * 0.1
                ),
                distance: distance
            };

            asteroid.userData = userData;
            asteroids.push(asteroid);
            scene.add(asteroid);
        }

        // Load and apply texture to asteroids
        loadAndDownscaleTexture(asteroidTexturePlaceholder, 1.5).then((texture) => {
            const asteroidMaterial = new THREE.MeshStandardMaterial({ 
                map: texture,
                metalness: 0.3,
                roughness: 0.8,
                color: 0xffffff,
                normalScale: new THREE.Vector2(1, 1)
            });
            asteroids.forEach(asteroid => asteroid.material = asteroidMaterial);
        });

        // Mouse interaction setup
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        let isDragging = false;
        let previousMousePosition = {
            x: 0,
            y: 0
        };
        let rotationSpeed = 0.0005; // Base rotation speed
        let dragRotationSpeed = 0; // Additional rotation from dragging
        const interactionStrength = 0.9;

        const handleMouseDown = (event: MouseEvent) => {
            isDragging = true;
            previousMousePosition = {
                x: event.clientX,
                y: event.clientY
            };
            dragRotationSpeed = 0; // Reset drag rotation speed when starting new drag
        };

        const handleMouseMove = (event: MouseEvent) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            // Handle asteroid interaction
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(asteroids);
            
            intersects.forEach(intersect => {
                const asteroid = intersect.object;
                (asteroid.userData as any).velocity.add(new THREE.Vector3(
                    (Math.random() - 0.5) * interactionStrength,
                    (Math.random() - 0.5) * interactionStrength,
                    (Math.random() - 0.5) * interactionStrength
                ));
            });

            if (isDragging) {
                const deltaMove = {
                    x: event.clientX - previousMousePosition.x,
                    y: event.clientY - previousMousePosition.y
                };

                // Check for planet intersection
                const planetIntersects = raycaster.intersectObjects([earth]);
                if (planetIntersects.length > 0) {
                    dragRotationSpeed = deltaMove.x * 0.005;
                    earth.rotation.y += dragRotationSpeed;
                    document.body.style.cursor = 'grabbing';
                }

                previousMousePosition = {
                    x: event.clientX,
                    y: event.clientY
                };
            }
        };

        const handleMouseUp = () => {
            isDragging = false;
            document.body.style.cursor = 'default';
            // Keep the current drag rotation speed
            rotationSpeed = dragRotationSpeed || rotationSpeed;
        };

        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        // Camera position
        camera.position.set(0, 200, 1200); // Moved camera closer
        camera.lookAt(0, 0, -3000);

        // Animation
        const animate = () => {
            requestAnimationFrame(animate);

            // Apply continuous rotation (base speed + momentum)
            if (!isDragging) {
                earth.rotation.y += rotationSpeed;
                // Gradually decrease rotation speed
                rotationSpeed *= 0.995;
                // Reset to base speed when rotation slows down enough
                if (Math.abs(rotationSpeed) < 0.0005) {
                    rotationSpeed = 0.0005;
                }
            }

            // Update asteroid positions
            asteroids.forEach(asteroid => {
                const position = asteroid.position;
                const velocity = (asteroid.userData as any).velocity;

                const directionToEarth = new THREE.Vector3(
                    -position.x,
                    -position.y,
                    -(position.z + 3000) // Adjust for Earth's position
                ).normalize();

                const distanceToEarth = position.clone().add(new THREE.Vector3(0, 0, 3000)).length();
                const gravityForce = 3 / (distanceToEarth * distanceToEarth);

                velocity.add(directionToEarth.multiplyScalar(gravityForce));
                position.add(velocity);
            });

            renderer.render(scene, camera);
        };

        // Handle window resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Create gradient canvas with website colors
        function createGradientCanvas() {
            const canvas = document.createElement('canvas');
            canvas.width = 512;
            canvas.height = 512;
            
            const ctx = canvas.getContext('2d')!;
            const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
            
            gradient.addColorStop(0, '#1a1a2e');    // Very dark blue
            gradient.addColorStop(0.2, '#16213e');  // Dark navy blue
            gradient.addColorStop(0.4, '#1b2a4a');  // Navy blue
            gradient.addColorStop(0.6, '#2c3e50');  // Dark slate
            gradient.addColorStop(1, '#0f172a');    // Very dark slate blue
            
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            return canvas;
        }

        animate();

        // Cleanup
        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('resize', handleResize);
            mountRef.current?.removeChild(renderer.domElement);
            scene.clear();
        };
    }, []);

    return <div ref={mountRef} className="absolute top-0 left-0 w-full h-full" style={{ minHeight: '100vh' }} />;
};

export default SpaceBackground;
