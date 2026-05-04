$files = Get-ChildItem 'components\landing' -Filter '*.tsx'
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $content = $content -replace 'Maintenance App', 'Tradesperson App'
    $content = $content -replace 'Maintenance request from', 'Tradesperson request from'
    $content = $content -replace 'maintenance requests', 'tradesperson requests'
    $content = $content -replace 'Maintenance requests', 'Tradesperson requests'
    $content = $content -replace 'Maintenance Requests', 'Tradesperson Requests'
    $content = $content -replace '1-Tap Maintenance', '1-Tap Tradesperson'
    $content = $content -replace 'approve maintenance', 'approve tradesperson'
    $content = $content -replace 'track maintenance', 'track tradesperson'
    $content = $content -replace 'report maintenance', 'report tradesperson'
    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}
Write-Host "Done replacing Maintenance with Tradesperson"
