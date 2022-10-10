res = 0

function onTick()
	-- replace the 1 with whichever input you want
	async.httpGet(3000, "/?storm1")
	output.setNumber(1, res)
end

function httpReply(port, request_body, response_body)
		-- the response is in plaintext. And the input is divided by 100 to have it be between 0-1 instead of 0-100
		res = math.tointeger(response_body)/100
end
