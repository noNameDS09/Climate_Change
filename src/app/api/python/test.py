import sys
import requests

def get_chatbot_response(prompt):
    url = "http://127.0.0.1:5000/chatbot"  # Your chatbot's URL
    try:
        response = requests.post(url, json={"prompt": prompt})
        if response.status_code == 200:
            data = response.json()
            return data.get("output", "No output from chatbot")
        else:
            return f"Error: {response.status_code}, {response.text}"
    except Exception as e:
        return f"Error occurred: {str(e)}"

if __name__ == "__main__":
    prompt = sys.argv[1] if len(sys.argv) > 1 else ""
    result = get_chatbot_response(prompt)
    print(result)  # This will output the result back to Node.js
