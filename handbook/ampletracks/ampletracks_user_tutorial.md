# Ampletracks *User* Tutorials

We will be using <https://demo.ampletracks.com> for this tutorial.

In this *User* tutorial we will be creating a record for an **ingot of Steel** received from **Company A**. We want to perform EBSD on the sample so need to section it to smaller pieces. We will be using a **TESCAN Mira3 LC FEG-SEM** to perform EBSD with a **Oxford Instruments Symmetry S1** detector. We will be **storing** the EBSD maps on an area of our **local drive**. We will be using **Aztec Crystal Software** to analyse the data. We want a way to track this work and decide to use Ampletracks to index the samples and EBSD maps, and relate them to each other and the acquisition equipment.

We will (covered in sections {ref}`create-sample` - {ref}`relate`):

1. Create a *Sample* *Record* for the ingot
2. Create a '*Sub-Sample*' *Record* from our original *Sample* *Record* (or *Child* Sample, as is referred to in Ampletracks) for our sectioned steel ingot
3. Create a *Dataset* record to index the EBSD map data, which is stored in a local drive
4. Edit these records to relate them to each other
   :::{important}
   The *Record* <i class="fa-sharp fa-solid fa-arrow-right"></i> *Child Record* relationship is intrinsic and does not require any manual input from the *User* other than the creation of the *Child Record*
   :::

Once we have performed our analysis on the raw data, we want to track that analysis. We will:

1. Create a *Child* *Dataset* *Record* from the original *Dataset* *Record*
2. Relate that *Child* *Record* to the *Analysis Tool* *Record* for **Aztec Crystal Software**

This above is covered in sections {ref}`create-data-child` and {ref}`relate-analysed-dataset`

(create-sample)=
## Create a Sample record

Here, we are creating a *Sample* *Record* for the **steel ingot** as received from **Company A**.
To create the sample record:

1. Navigate to the *Samples* listing
2. Click on the <span class="badge bg-light" style="background-color:#1a7182 !important;">Add Sample</span> button
3. Follow the form and fill:
   1. A `Unique name of the sample` of your choice
   2. `Material` details, i.e. the comprising elements
   3. `Description of the sample`
   4. Indicate any `Process history` before receipt from **Company A**
   5. `Location`
   6. Indicate that the *Sample* was received from **Company A** in `Additional information`
   7. `Contact name`
   8. `Contact email`
4. Click the <span class="badge bg-light" style="background-color:#1a7182 !important;">Save</span>, or <span class="badge bg-light" style="background-color:#1a7182 !important;">Save & Close</span> button, once you have submitted all your *Sample* details

(create-child)=
### Create a sub-Sample record

We need to create a sub-*Sample* *Record* for our sectioned part of the ingot, which we will use for EBSD data acquisition.

To do this:
1. Navigate to the *Record* of the *Sample* you just created
2. Click the <span class="badge bg-light" style="background-color:#1a7182 !important;">+ New child record</span> button, which is within the **Descendants** box, below the main *Sample* menu
3. A new *Record* form will open up with some inherited features
   1. Inspect the form before modifying anything
   2. Uncheck the *inherited* box for the field `Unique name of the sample`
   3. Type out a description in the `Process history` to indicate that this is a cut-off of a larger ingot and has been prepared for EBSD data acquisition
   4. Click the <span class="badge bg-light" style="background-color:#1a7182 !important;">Save</span>, or <span class="badge bg-light" style="background-color:#1a7182 !important;">Save & Close</span> button

(edit-sample)=
### Edit the Sample details

Now that we have a *Sample* and *Child Sample* *Record*, we can try editing either or both of them.

1. Navigate to the *Record* **View** mode
2. Click on the <span class="badge bg-light" style="background-color:#1a7182 !important;">Edit</span> button
3. Modify some of the details about the sample, either the `Additional information` or `Process history`
4. Click the <span class="badge bg-light" style="background-color:#1a7182 !important;">Save</span>, or <span class="badge bg-light" style="background-color:#1a7182 !important;">Save & Close</span> button

(add-qr-code)=
## Add a QR code to a pre-existing sample

### Add the QR code

For this part you will be handed a QR code sticker. 

1. Grab an object you would like to use as a *Sample*
2. Inspect the QR code sticker, you will see a number, as shown in {numref}`qr-code-example-fig`
   :::{figure} ../images/ampletracks/qr_object.jpg
   :width: 80%
   :name: qr-code-example-fig
   An example QR code label sticker.
   :::
3. Navigate to the *Sample Record* you want to associate with the QR code label and enter **Edit** mode
4. Type in the number of your label in the text box underneath the `Assign label:` title, in the **Labels** area. The number in this example is `0001928` or `1928`, as shown in :
   :::{figure} ../images/ampletracks/demo_ampletracks_labels_area.png
   :width: 80%
   :name: labels-area-example
   The **Labels** area in a *Record*
   :::
5. Click out of the area in a non-responsive part of the form, a <span class="badge bg-light" style="background-color:#1a7182 !important;">Submit</span> button should appear
6. Click the <span class="badge bg-light" style="background-color:#1a7182 !important;">Submit</span> button
7. Now click the <span class="badge bg-light" style="background-color:#1a7182 !important;">Save</span>, or <span class="badge bg-light" style="background-color:#1a7182 !important;">Save & Close</span> button
8. Your *Record* in now associated with the label
    
### Test out the QR code

(not-logged-in-qr-test)=
#### Not logged in

***For this part, you willneed to use a device with a camera. We strongly recommend that you open up an incognito window, log out of Ampletracks, or use your phone***

1. Connect to <https://demo.ampletracks.com>
2. Click on the **Want to scan a label?** area, as shown in {numref}`scan-a-label-login-page`
   :::{figure} ../images/ampletracks/ampletracks_want_scan_label.png
   :width: 80%
   :name: scan-a-label-login-page
   The **Want to scan a label?** area in the Ampletracks login page on a Desktop browser
   :::
3. Grant permission to Ampletracks to access your camera
4. Plan the label within the camera window
5. The label will scan and redirect you to a window listing some details about your *Record*, as shown in {numref}`sample-details-public`
   :::{figure} ../images/ampletracks/demo_ampletracks_public_record.png
   :width: 80%
   :name: sample-details-public
   Public details about a *Sample Record* displayed when scanning a QR code label when not logged into the system
   ::: 

#### Logged in

Now, feel free to repeat the steps detailed in section {ref}`not-logged-in-qr-test` when logged into Ampletracks.

(create-dataset)=
## Create a Dataset record

1. Switch to the *Dataset Records* listing page
2. Click on the <span class="badge bg-light" style="background-color:#1a7182 !important;">Add Dataset</span> button
3. Follow the form
4. You will reach a box where you will be prompted to add a link to a local file/directory or a cloud-stored file/directory
5. Try listing a local directory on your system following this 'link' convention `file:///explicit-full-path-to-directory-or-file`
6. Fill in all other details for your *Dataset* *Record*
7. Now click the <span class="badge bg-light" style="background-color:#1a7182 !important;">Save</span>, or <span class="badge bg-light" style="background-color:#1a7182 !important;">Save & Close</span> button

(relate)=
## Create a relationship between the *Sample* and *Dataset* *Records*

1. Navigate to the *Dataset* *Record* you just created
2. Click on the <span class="badge bg-light" style="background-color:#1a7182 !important;">Edit</span> button
3. Click on the `-- Add new relationship --` drop-down menu, under **Relationships**
4. Investigate what types of relationships you can form by choosing any available option
5. Start typing in the text box that will appear
   :::{hint}
   By typing `___` or `%%%` you can see a list of all available options. Within a larger version of Ampletracks, you can also search for *Records* to relate your *Record* to by typing in the *Record* owner's name in the text box.
   :::
6. Choose a *Record* to relate it to
7. Click the <span class="badge bg-light" style="background-color:#1a7182 !important;">Save</span>, or <span class="badge bg-light" style="background-color:#1a7182 !important;">Save & Close</span> button

(create-data-child)=
## Create an **analysed** Dataset record (*Child*)

1. Navigate to the *Dataset Record* for which you want to create a *Child Record*
2. Click the <span class="badge bg-light" style="background-color:#1a7182 !important;">+ New child record</span> button, which is within the **Descendants** box, below the main *Dataset* menu
3. Follow the instructions in creating a new *Dataset Record*
4. Click the <span class="badge bg-light" style="background-color:#1a7182 !important;">Save</span>, or <span class="badge bg-light" style="background-color:#1a7182 !important;">Save & Close</span> button
5. The *Child Dataset Record* is intrinsicly relate to your *Parent Dataset Record*

(relate-analysed-dataset)=
## Relate the **analysed** Dataset to the Analysis Tool

1. Navigate to the *Child* *Dataset* *Record* you just created
2. Click on the <span class="badge bg-light" style="background-color:#1a7182 !important;">Edit</span> button
3. Click on the `-- Add new relationship --` drop-down menu, under **Relationships**
4. Choose `was analysed using` from the dropdown menu
5. Start typing 'AZtec Crystal Software' (you needn't type the full text in) in the text box that will appear
6. Choose the *Analysis Tool Record* to relate it to
7. Click the <span class="badge bg-light" style="background-color:#1a7182 !important;">Save</span>, or <span class="badge bg-light" style="background-color:#1a7182 !important;">Save & Close</span> button
