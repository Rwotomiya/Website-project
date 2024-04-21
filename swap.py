import cv2

# Read the image
image = cv2.imread(r'pics\UHHlogo.png', cv2.IMREAD_GRAYSCALE)

# Invert the colors
inverted_image = cv2.bitwise_not(image)

# Display the inverted image
cv2.imshow('Inverted Image', inverted_image)
cv2.waitKey(0)
cv2.destroyAllWindows()

# Alternatively, save the inverted image
desktop_path = r'C:\Users\ZBOOK\Desktop\Web Development Project\pics' # Adjust the username as necessary
filename = 'inverted_image.jpg'
full_path = f'{desktop_path}\\{filename}'
cv2.imwrite(full_path, inverted_image)
