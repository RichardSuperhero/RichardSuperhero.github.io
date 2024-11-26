$nvmUrl = "https://github.com/coreybutler/nvm-windows/releases/download/1.1.11/nvm-setup.exe"
$outputPath = "$env:TEMP\nvm-setup.exe"

# Download NVM installer
Invoke-WebRequest -Uri $nvmUrl -OutFile $outputPath

# Run the installer
Start-Process -FilePath $outputPath -Wait
