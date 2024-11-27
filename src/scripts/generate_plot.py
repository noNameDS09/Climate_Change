import os
import matplotlib.pyplot as plt

def generate_plot():
    # Sample data
    x = [1, 2, 3, 4, 5]
    y = [2, 4, 6, 8, 10]

    # Create a plot
    plt.plot(x, y, marker='o', linestyle='-', color='b')
    plt.xlabel('X-axis')
    plt.ylabel('Y-axis')
    plt.title('Simple Line Graph')

    # Define the absolute path to save the plot in the public folder
    public_folder_path = os.path.join(os.path.dirname(__file__), '..', '..', 'public', 'plot.png')

    # Save the plot as an image file in the public folder
    plt.savefig(public_folder_path)

    # Close the plot to free memory
    plt.close()

if __name__ == "__main__":
    generate_plot()
