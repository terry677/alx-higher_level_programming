#!/usr/bin/python3

"""
Write a Python script that takes in a URL and an email, sends
a POST request to the passed URL with the email as a parameter,
and displays the body of the response (decoded in utf-8)
"""

if __name__ == '__main__':
    from sys import argv
    from urllib import request, parse

    if len(argv) == 3:
        url = argv[1]
        values = {'email': argv[2]}

        data = parse.urlencode(values)
        data = data.encode('ascii')
        req = request.Request(url, data)
        with request.urlopen(req) as response:
            result = response.read()
            print(result.decode('utf-8'))
