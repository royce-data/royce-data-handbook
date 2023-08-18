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
3. Follow the form
4. Once you have submitted all your *Sample*

(create-child)=
### Create a sub-Sample record

(edit-sample)=
### Edit the Sample details

(inspect-log)=
### View the action log

(add-qr-code)=
## Add a QR code to a pre-existing sample

### Add the QR code

### Test out the QR code

(create-dataset)=
## Create a Dataset record

(relate)=
## Create relationships between these records

(create-data-child)=
## Create an **analysed** Dataset record (*Child*)

(relate-analysed-dataset)=
## Relate the **analysed** Dataset to the Analysis Tool


