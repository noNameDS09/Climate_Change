import sys

def f(prompt):
    return prompt + "Hello"

# Accept input via command-line argument
if __name__ == "__main__":
    prompt = sys.argv[1] if len(sys.argv) > 1 else ""
    result = f(prompt)
    print(result)  # This will output the result back to Node.js
