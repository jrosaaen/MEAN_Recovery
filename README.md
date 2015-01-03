#General premise
######This is the overall guide I am growing this application up with. It should look like a set of business rules and modeling and how stuff ought to work...this is subject to change

##Clients
---
######Clients must have at least 1 Service attached to them otherwise they will not be allowed to be entered into the system
######Cannot be deleted


##Services
---
######Can only be added by an Admin
######Is a requirement for a Client
######Must belong to a Facility
######Cannot be deleted

##Facility
---

######Can only be added by an Admin
######Is a requirement for a Service
######Cannot be deleted


#Expectations
---
######All assumptions are as an Authorized User(AU)
######The expectation is that you will not make it past the login screen if not authorized
######An Admin must add you to the system in order for you to login
######There is no Sign Up page
######If the password is forgotten it will need to send out a reset link email to the users address entered by the Admin

###The main landing page (MPL) for non AU should show
######A Search Bar
######A button to view Services
######A button to view Facilities
######Application name based on branding on upper left navbar
######A signin link on upper right navbar

###All actions on MLP for a non AU should result in signin page being displayed.


###The AU landing page should show
######A Search Bar
######A button to view all currently enrolled Clients
######A button to view Services
######A button to view Facilities
######If AU is an Admin a button to Admin Functions

***

###When typing in the search bar
######Automatically display in a drop down the Clients that are currently enrolled in Services (only after full first or last name has been spelled correctly)
####Example: Typing 'Jo' in search bar will not show a client named 'John' until 'John' has been entered...then a placeholder listing for 'John' will display with last name obfuscated until first few letters are typed. Further typing after 'John' has been entered will result in a last name search. Typing 'John D' could display 'John Doe' John Doh' and 'John Dont'. One could select at this point from the drop down or continue typing the last name to get to the person searching for.
######Automatically select Services that have been created by an Admin
######Automatically select Facilities that have been created by an Admin
######As typing continues, items not matching contents of Search Bar are eliminated from drop down list

***

###When viewing Client from Search Bar drop down I should see
######Client Name
######Service Name that Client is enrolled in
######Facility Name that Service Name is hosted at

###When viewing Service from Search Bar drop down I should see
######Service Name
######Facility Name that Service Name is hosted at
######Date Service was added
######Username that added the Service

###When viewing Facility from Search Bar drop down I should see
######Facility Name
######Services Name that are hosted at this Facility
######Date Facility was added
######Username that added the Facility

***

###When clicking on Client in Search Bar I expect
######A modal window with basic Client information
######A button in modal window that will allow me to expand details about Client
######A button in modal window that will close modal window

###When clicking on Service in Search Bar I expect
######A modal window with basic Service information
######A button in modal window that will allow me to expand details about Service
######A button in modal window that will close modal window

###When clicking on Facility in Search Bar I expect
######A modal window with basic Facility information
######A button in modal window that will allow me to expand details about Facility
######A button in modal window that will close modal window

***

###When clicking on Services button on AU landing page
######Change route to /services
######Display a list of Services
######Button to add a Client to a Service(Modal window to enter just a Name, Birth Date, SSN and State Issued ID number. The new Client will need to be found via Search Bar and edited after that to include further information.)

###When clicking on Facilities button on AU landing page
######Change route to /facilities
######Display a list of Facilities

###When clicking on Admin button on AU landing page
######Change route to /admin
######Display a list of Admin Functions

