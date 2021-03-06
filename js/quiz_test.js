var questions = [
					
				["Allows one program to run concurrently.", "Multi-user", "Multiprocessing", "Multitasking", "Multithreading", "C"],
				["A program that translates a program written in assembly language into an equivalent program in machine language.", "Assembler", "Compiler", "Loader", "Translator", "A"],
				["A language developed by Brian Kernighan and Dennis Ritchie.", "C", "BCPL", "C++", "PHP", "A"],
				["Refers to the events that occur while the program is actually executing.", "Compile Time Error", "Run Time Error", "Logical Error", "Syntax Error", "B"],
				["This type of connector is used instead of the on-page connector to designate entry to or exit from a page when a flowchart requires more than one page.", "On-Page Connector", "Off-Page Connector", "Page Connector", "USB Connector", "B"],
				["These logical operations can be applied bitwise to n-bit logical data units.", "Logical", "Relational", "Conversion", "Addition", "C"],
				["Provides the functional requirement for the CPU.", "Machine language", "Addressing mode", "Instruction set", "Assembly language", "C"],						["What is the default filename of an MS Excel File 2007?", "Book1.xls", "Book.xlt", "Book1.doc", "Book1.vbp", "A"],
				["What do you call the horizontal block of cells numbered sequentially from the top?", "row", "column", "database", "range", "A"],
				["A freely-distributed open source operating system runs on a number of hardware platforms.", "DOS", "LINUX", "UNIX", "WINDOWS", "B"],
				["Probably the original mechanical counting device", "Calculator", "Flash cards", "Popsicle stick", "Abacus", "D"],
				["Refers to the physical components of a computer.", "Software", "Peopleware", "Firmware", "Hardware", "D"],
				["The first microprocessor", "INTEL IV", "INTEL 4005", "INTEL 4004", "INTEL 8800", "C"],
				["A worldwide network of computers.", "Internet", "Intranet", "Ethernet", "Intronet", "A"],
				["A collection of related web pages with a common web address", "Web", "Web page", "Web master", "Web site", "D"],
				["The major language of the Internet's Worldwide Web.", "HTTP", "WWW", "XML", "HTML", "D"],
				["A computer that delivers Web pages requested by users.", "Web Server", "Web Page", "Web Master", "Web Site", "A"],
				["The father of Computer Science and Artificial Intelligence.", "Allen Turing", "Allen Turin", "Allan Turing", "Allan Turning", "C"],
				["The geometric arrangement of devices on the network.", "Network", "Topology", "Architecture", "None of these", "B"],
				["Which of the following languages is more suited to a structured program?", "PL/1", "FORTRAN", "BASIC", "PASCAL", "D"],
				["What difference does the 5th generation computer have from other generation computers?", "Technological advancement", "Scientific code", "Object Oriented Programming", "All of the above", "A"],
				["The brain of any computer system is", "ALU", "Memory", "CPU", "Control unit", "C"],
				["The tracks on a disk which can be accessed without repositioning the R/W heads is", "Surface", "Cylinder", "Cluster", "All of the above", "B"],
				["Which of the following is the 1's complement of 10?", "01", "110", "11", "10", "A"],
				["The binary system uses powers of", "2", "10", "8", "16", "A"],
				["Any type of storage that is used for holding information between steps in its processing is", "CPU", "Primary storage", "Intermediate storage", "Internal storage", "C"],
				["The section of the CPU that selects, interprets and sees to the execution of program instructions", "Memory", "Register unit", "Control unit", "ALU", "C"],
				["The examination and changing of single bits or small groups of his within a word is called", "Bit", "Byte", "Bit manipulation", "Bit Slice", "C"],
				["Which computer has been designed to be as compact as possible?", "Mini", "Super Computer", "Micro Computer", "Mainframe", "C"],
				["Which device of computer operation dispenses with the use of the keyboard?", "Joystick", "Light Pen", "Mouse", "Touch", "C"],
				["Who was the father of Punched Card Processing?", "J Presper Eckert", "Charles Babbage", "Dr. Herman Hollerith", "Blaise Pascal", ""],
				["Comment symbol in Javascript", "@", "//", "'<!----!>", "*", "B"],
				["The equipment with which the computer talks to its users is called a", "word processor", "peripheral", "software", "diskette", "B"],
				["Each of data files has a _____ that describe the way the data is stored in the file.", "File structure", "Records", "Fields", "Database", "A"],
				["What is the language used by most of the DBMSs for helping their users to access data?", "High level language", "Query language", "SQL", "4GL", "B"],
				["Periodically adding, changing and deleting file records is called file", "Updating", "Upgrading", "Restructuring", "Renewing", "A"],
				["The relational model uses some unfamiliar terminology. A tuple is equivalent to a:", "record", "field", "file", "data item", "A"],
				["A top-to-bottom relationship among the items in a database is established by a", "Hierarchical schema", "Network schema", "Relational schema", "All of the above", "A"],
				["A native language used in developing application for Blackberry.", ".NET", "C++", "Java", "Objective C", "B"],
				["A native language used in developing application for Android.", ".NET", "C++", "Java", "Objective C", "C"],
				["A native language used in developing application for Windows.", ".NET", "C++", "Java", "Objective C", "A"],
				["A native language used in developing application for IOS.", ".NET", "C++", "Java", "Objective C", "D"],
				["What character is used in an OR operator?","Ampersand","Bracket","Colon","Pipe","D"],
				["What language does the computer use and understand?","High-level","Assembly","Machine","None of the above","C"],
				["A Cathode Ray Tube is found in what?","CPU","Printer","Monitor","Scanner","C"],
				["A Computer Virus cannot be contracted by which of the below.","Floppy diskette","E-mail","Scanner","Internet Downloads","C"],
				["What is a cookie?","Cooking software","Web site","Internet information file","Hacker file","C"],
				["Which command lists files in MS-DOS?","cd","ls","dir","list","C"],
				["Which of the following is not an image file?","JPEG","GIF","TMP","BMP","C"],
				["The Windows 98 registry consists of which two files? ","autoexec.bat and config.sys","user.dat and win.ini","user.dat and system.dat","win.reg and user.dat","C"],
				["UNIX is short for what?","UNIt eXchange","UNIform eXchange","UNIt X","It is not an acronym","D"],
				["Which of the following is not or was not a Internet browser?","Internet Explorer","Hotmail","Netscape","Opera","B"],
				["Which of the following is not an Operating System?","System 7","UNIX","OSD","MS-DOS ","C"],
				["Which of the following file extensions is not an audio file format?","MP3","AIF","WAV","COM","D"],
				["Which of the following is not a UNIX or Linux variant","Ubuntu","RedHat","DOS","Debian","C"],
				["Which of the following will not help with computer security?","Firewall","VLAN","Good Password","Updated software","B"],
				["Which of the following is an example of Binary?","123","01100001","0x3F7A","All of the above","B"],
				["Information given to a compute is called as ________________","Output","Result","Input","Set","C"],
				["Which of the following is not related to programming?","Subroutine","Compile","Null pointer","Interleave","D"],
				["How many bits in a byte?","1","2","4","8","D"],
				["How many keys does the standard Windows US keyboard with a number pad have?","74","84","94","104","D"],
				["Which below file extensions is not a compressed file?",".bin",".rar",".tar",".z","C"],
				["What is another common name for a motherboard?","CPU","Fatherboard","Main system","System board ","D"],
				["Which of the following people is credited for developing the World Wide Web?","Alan Kay","Tim Berners-Lee","Jack Kilby","Robert Noyce","B"],
				["Who developed the Apple I?","Bill Gates","Bill Jobs","Steve Palmer","Steve Wozniak","D"],
				["What command comments out a line in a batch file?","#",";","Hide","Rem","D"],
				["In what year did Time Magazine name the personal computer the machine of the year?","1978","1980","1982","1995","C"],
				["Which of the following is the GUI commonly used with Linux?","LUI","GNU","GPL","GNOME","D"],
				["Who created the first mouse?","Bill Gates","Douglas Englebart","John Mauchly","Robert Noyce","B"],
				["What MS-DOS command can display hidden files?","attrib","cd"," ls","more","A"],
				["What command clears the screen in MS-DOS and the Windows command line?","cd","clear","cls","echo","C"],
				["Which of the following is not a social network site?","Amazon","MySpace","Orkut","Twitter","A"],
				["Who was one of the original founders for the Intel corporation?","Bill Gates","Jerry Yang","Gordon E. Moore","Sergey Brin","C"],
				["Where are the device drivers settings for Windows stored?","BIOS","CMOS","EEPROM","Registry","D"],
				["Which of the following is not related to the Internet and web development?","DOS","HTML","JAVA","PHP","A"],
				["What is Apache?","browser","computer","operating system","web server","D"],
				["What is XML short for?","eXtensive Markup Language","eXtensive Markup List","eXtension Markup List","eXtensible Markup Language","D"],
				["Which of the following Windows utilities allow you to view a drives partition information?","Chkdsk","Disk Management","Device Manager","Scandisk","B"],
				["Which below IP address would be used for a local network?","74.125.127.100","69.72.169.241","192.168.1.100","209.131.36.100","C"],
				["When was the first e-mail sent?","1963","1969","1971","1974","C"],
				[" Who famously said \"640K ought to be enough for anybody\".","Bill Gates","Steve Jobs","Steve Wozniak","None of the above","D"],
				["What company built the first processor in the Apple Macintosh?","AMD","Apple","Intel","Motorola","D"],
				["JavaScript is ....?","a client-side scripting language","a server-side scripting-language","a virus","another name for Java","A"],
				["Who is considered to be the first programmer?","Ada Lovelace","Alan Turing","Bill Gates","Tim Berners-Lee","A"],
				["Which of the following people was a co-founder of Microsoft?","Steve Wozniak","Paul Allen","Bill Moggridge","Gary Starkweather","B"]
			];
					
					