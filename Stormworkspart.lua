x = 19
res = 0

function onTick()
	-- only requests data every 20 ticks
	if x == 20 then
		x = 0
		async.httpGet(3000, "/?storm")
		output.setNumber(1, res)
	end
	
	x = x+1
end

function httpReply(port, request_body, response_body)
		-- the response is in plaintext. And the input is divided by 100 to have it be between 0-1 instead of 0-100
		res = math.tointeger(response_body)/100
end
