res = "0"
x = 0
y = 0

numtable = {0}
booltable = {0}


function httpnum()
	async.httpGet(80, "/?stormnum")
for i = #numtable, 1, - 1 do
    output.setNumber(i-1, numtable[i-1])
end	
end

function httpbool()
	async.httpGet(80, "/?stormbool")
for i = #booltable, 1, - 1 do
    output.setBool(i-1, booltable[i])
end
end

function onTick()
	if y == 10 then
		httpbool()
		y = 0
	elseif y ==  5 then
		httpnum()
		y = y + 1
	else
		y = y + 1
	end
end

function httpReply(port, request_body, response_body)
		res = response_body
		
if request_body == "/?stormbool" then
		for i = #booltable, 1, - 1 do
			table.remove(booltable)
end
		for word in string.gmatch(res, '([^,]+)') do
			table.insert(booltable, math.ult(0, math.tointeger(word)))
end
end

if request_body == "/?stormnum" then
		for i = #numtable, 1, - 1 do
			table.remove(numtable)
end
		for word in string.gmatch(res, '([^,]+)') do
			table.insert(numtable, math.tointeger(word)/100)
end
end
		
end
