import ViewCounter from './ViewCounter'

export default function Footer() {
  return (
    <footer className="bg-[#212a32] text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4">{new Date().getFullYear()} Richard van der Merwe. All rights reserved.</p>
        <ViewCounter />
      </div>
    </footer>
  )
}
