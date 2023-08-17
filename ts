repeat wait(120) until game:IsLoaded()

getgenv().ChooseTeam = "Pirate"
repeat wait() 
until game:IsLoaded()
repeat wait() until game.Players
repeat wait()
until game:IsLoaded() and game.Players.LocalPlayer
repeat wait()
until game:GetService("Players").LocalPlayer:FindFirstChild("DataLoaded")
repeat wait() until game.Players.LocalPlayer:FindFirstChild("PlayerGui")
repeat wait()
    if game:GetService("Players").LocalPlayer.PlayerGui:WaitForChild("Main"):FindFirstChild("ChooseTeam") then
        if game:GetService("Players").LocalPlayer.PlayerGui:WaitForChild("Main"):FindFirstChild("ChooseTeam") then
            if string.find(getgenv().ChooseTeam, "Pirate") then
                for i,v in pairs(getconnections(game:GetService("Players").LocalPlayer.PlayerGui.Main.ChooseTeam.Container.Pirates.Frame.ViewportFrame.TextButton.Activated)) do
                    v.Function()
                end 
            elseif string.find(getgenv().ChooseTeam, "Marine")  then
                for i,v in pairs(getconnections(game:GetService("Players").LocalPlayer.PlayerGui.Main.ChooseTeam.Container.Marines.Frame.ViewportFrame.TextButton.Activated)) do
                    v.Function()
                end 
            else
                for i,v in pairs(getconnections(game:GetService("Players").LocalPlayer.PlayerGui.Main.ChooseTeam.Container.Pirates.Frame.ViewportFrame.TextButton.Activated)) do
                    v.Function()
                end 
            end
        end 
    end
until game.Players.LocalPlayer.Team ~= nil and game:IsLoaded()
wait(5)
local RAMAccount = loadstring(game:HttpGet'https://raw.githubusercontent.com/vn4medataweb/data/main/t')()

local MyAccount = RAMAccount.new(game:GetService'Players'.LocalPlayer.Name)
if MyAccount then
  function CheckItem(Item)
    have = false
    for i,v in pairs(game:GetService("ReplicatedStorage").Remotes["CommF_"]:InvokeServer("getInventory")) do 
      if v.Name == Item then
        have = true
        for i2,v2 in pairs(v) do
          print(i2,v2)
          if type(v2) == "table" then
            for i3,v3 in pairs(v2) do
              print(i2,v2)
            end
          end
        end
      end
    end
    for i,v in pairs(game.Players.LocalPlayer.Character:GetChildren()) do
      if v:IsA("Tool") and v.Name == Item then
        have = true
      end
    end
    for i,v in pairs(game.Players.LocalPlayer.Backpack:GetChildren()) do
      if v:IsA("Tool") and v.Name == Item then
        have = true
      end
    end
    return have;
  end
  function checkgod()
    toreturn = ""
    if CheckItem("Godhuman") == true then
      toreturn = "-GOD"
    end
    return toreturn;
  end
  function checkcdk()
    toreturn = ""
    if CheckItem("Cursed Dual Katana") == true then
      toreturn = "-CDK"
    end
    return toreturn;
  end
  function checkttk()
    toreturn = ""
    if CheckItem("True Triple Katana") == true then
      toreturn = "-TTK"
    end
    return toreturn;
  end
  function checksoulguitar()
    toreturn = ""
    if CheckItem("Soul Guitar") == true then
      toreturn = "-SG"
    end
    return toreturn;
  end
  function guong()
    toreturn = ""
    if CheckItem("Mirror Fractal") == true then
    if CheckItem("Valkyrie Helm") == true then
      toreturn = "-MM"
    end
    end
    return toreturn;
  end
  function checkmeleecount()
    local MeleeTable = {"Superhuman","ElectricClaw","DragonTalon","SharkmanKarate","DeathStep","Godhuman","Dough"}
    Meleecount = 0
    for i,v in pairs(MeleeTable) do
      if game:GetService("ReplicatedStorage").Remotes.CommF_:InvokeServer("Buy"..v,true) == 1 then
        Meleecount = Meleecount + 1
        print(v)
      end
    end
    return Meleecount;
  end
  while wait() do
    MyAccount:SetAlias(game.Players.LocalPlayer.Data.Level.Value.."-"..checkmeleecount()..checkcdk()..checkttk()..checksoulguitar()..guong()..checkgod())
    wait(60)
  end
end
