from moviepy.editor import VideoFileClip

# Define the path to your MKV file
input_file = 'output_video.mkv'
output_file = 'output_video2.mkv'

# Load the video file
video = VideoFileClip(input_file)

# Define the start and end times for the clip (in seconds)
start_time = 55  # 2 minutes
end_time = 77  # 2 minutes and 10 seconds

# Extract the subclip
subclip = video.subclip(start_time, end_time)

# Write the result to a file
subclip.write_videofile(output_file, codec='libx264')

# Close the video file
video.close()
