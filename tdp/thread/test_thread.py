#simulazione di download piu file

import threading
import time
import random

def copy_file(file_name):
    print(f"Inizio copiatura del file: {file_name}")
    time.sleep(2)
    with open(f"files/{file_name}", "r") as file:
        with open(f"copy/{file_name}", "w") as copyFile:
            copyFile.write(file.read())

def main():
    start = time.time()
    files = ["file1.txt", "file2.txt", "file3.txt"]
    threads = []
    """
    for file in files:
        copy_file(file)
    """

    for file in files:
        thread = threading.Thread(target=copy_file, args=(file,)) # file diveta una tupla
        thread.start()
        threads.append(thread)

    # Aspetta che tutti i thread finiscano
    for thread in threads:
        thread.join()

    end = time.time()
    print(f"Tutti i file sono stati copiati. tempo: {end-start}")

if __name__ == "__main__":
    main()
