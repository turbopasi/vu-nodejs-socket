local socket = Net:Socket(NetSocketFamily.INET, NetSocketType.Stream)
local result = socket:Connect('127.0.0.1', 64544);

-- listen for vext client events
NetEvents:Subscribe('ClientPosition', function(player, position)

  local package = {
    playerName = player.name, 
    position = position
  }

  -- write data to nodejs tcp socket server
  socket:Write(json.encode(package));

end)


