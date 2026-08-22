# 鍘ㄦ埧鍔╂墜鏈湴鏈嶅姟鍣ㄥ惎鍔ㄨ剼鏈?# 鍙屽嚮 start-server.cmd 鍗冲彲锛涙墜鏈哄拰鐢佃剳杩炲悓涓€ WiFi锛岀敤鏄剧ず鐨勫湴鍧€璁块棶
$port = 8123
$ip = (Get-NetIPAddress -AddressFamily IPv4 |
  Where-Object { $_.IPAddress -notlike '169.*' -and $_.IPAddress -ne '127.0.0.1' } |
  Select-Object -First 1).IPAddress
if (-not $ip) { $ip = '127.0.0.1' }

Write-Host ""
Write-Host "  鍘ㄦ埧鍔╂墜宸插惎鍔? -ForegroundColor Green
Write-Host "  鐢佃剳璁块棶:  http://127.0.0.1:$port" -ForegroundColor Cyan
Write-Host "  鎵嬫満璁块棶:  http://$ip`:$port" -ForegroundColor Cyan
Write-Host "  鎵嬫満娴忚鍣ㄦ墦寮€鍚庯紝鑿滃崟閫夈€屾坊鍔犲埌涓诲睆骞曘€? -ForegroundColor Cyan
Write-Host "  鍏抽棴: 鎸?Ctrl+C" -ForegroundColor Yellow
Write-Host ""
python -m http.server $port --directory (Split-Path -Parent $MyInvocation.MyCommand.Path)
