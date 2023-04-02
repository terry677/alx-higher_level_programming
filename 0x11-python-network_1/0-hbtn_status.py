#!/usr/bin/python3
"""
A python script that fetches https://alx-intranet.hbtn.io/status
"""
if __name__ == "__main__":
    import urllib.request
    url = 'https://alx-intranet.hbtn.io/status'
    with urllib.request.urlopen(url) as response:
        result = response.read()
        print("Body response:")
        print("\t- type {}".format(type(result)))
        print("\t- content: {}".format(result))
        print("\t- utf8 content: {}".format(result.decode("utf-8")))
