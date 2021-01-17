local counter = 0

Events:Subscribe('UI:DrawHud', function(data)

  -- primitive controller throttle 
  if counter < 10 then
    counter = counter + 1
    return
  end
  counter = 0

  -- get player
  local player = PlayerManager:GetLocalPlayer()
  if player == nil then
    return
  end 

  -- is player alive ? 
  if player.alive == false then
    return
  end

  -- get soldier
  local soldier = player.soldier
  if soldier == nil then
    return
  end

  -- get position vector
  local soldierPosition = soldier.worldTransform
  local position = soldierPosition.trans
  
  print(position)

  -- send to vext server
  NetEvents:Send('ClientPosition', position)

  

end)

