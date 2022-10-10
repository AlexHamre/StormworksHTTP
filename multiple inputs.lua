-- Does not work because of delay between sending and receiving
x = 1
res = 0
inputs = 4

function onTick()
	async.httpGet(3000, "/?storm" .. x)
	output.setNumber(x, res)	
	x = x + 1
	if x > inputs then
		x = 1
		end
	end

function httpReply(port, request_body, response_body)
		-- the response is in plaintext. And the input is divided by 100 to have it be between 0-1 instead of 0-100
		res = math.tointeger(response_body)/100
	end
