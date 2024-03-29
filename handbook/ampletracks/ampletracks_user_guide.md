# Ampletracks *User* Guide

The following guide relates to using a version of Ampletracks built for the Henry Royce Institute, which is hosted by us, and can be found on the website {{ royce_ampletracks }}. We cannot guarantee that this guide will describe the user experience and explain how to use any externally hosted version of Ampletracks.

:::{contents}
:local:
:depth: 4
:::

## Navigating Ampletracks

### User interface

#### Logging in

When connecting to {{ royce_ampletracks }} you will be greeted with a log-in page.

1. Input your personal log-in details (items 1 and 2 in {numref}`login-page`)
2. Click Login (item 4 in {numref}`login-page`)
3. You now have logged in to the {{ royce_ampletracks }} app

:::{figure} ../images/ampletracks/royce_ampletracks_login_page.png
:width: 100%
:name: login-page

The Royce Ampletracks Login page.
:::

:::{tip}
If you will be using {{ royce_ampletracks }} frequently, and are on a private machine that only you have access to then we suggest choosing (<i class="fa-sharp fa-regular fa-square-check"></i> item 3 in {numref}`login-page`) *Keep me logged in for next 7 days*
:::

#### Records Lists

Once you are logged into the {{ royce_ampletracks }} app you will be within a Records list. If this is not your first time logging in you will be taken to the Records list of the Record type you were viewing when you were last logged into the {{ royce_ampletracks }} app.

Important areas in {numref}`records-list` are marked with numbers:

- ***Item 1*** will direct you to the *Records listings* (where we currently are)
- ***Item 2*** will allow you to switch between *Record Types* lists via dropdown menu
- ***Item 3*** allows you to scan a physical QR code label that is related to a sample. To learn more about QR code labels, please refer to ...
- ***Item 4*** will take you to the account management page, where you can change account details such as your password, and contact details
- ***Item 5*** will allow you to add a new record of the Record list you are currently viewing, please refer to sections {ref}`create_sample`, {ref}`create_child_sample`, {ref}`create_dataset` to learn how to create records

:::{figure} ../images/ampletracks/royce_ampletracks_UI.png
:width: 100%
:name: records-list

The Records list for the *Sample Record Type* on Royce Ampletracks.
:::

## User permissions

When requesting an account on {{ royce_ampletracks }} you will usually be given a '*User*' role. This grants you usage of all of the basic capabilities {{ royce_ampletracks }}.

As a '*User*', you will be able to:

1. Create the Record Types '*Sample; Dataset; Equipment; Experiment; Analysis Tool; Sub Project*'
   :::{important}
   The Record Types you have been given access to will vary. We consider *Sample*, *Dataset* and *Equipment* to be the essential building block records of a {{ royce_ampletracks }} workflow.
   :::
2. Edit the Record Types '*Sample; Dataset; Equipment; Experiment; Analysis Tool; Sub Project*' **owned** by you (i.e. your user)
3. Delete the Record Types '*Sample; Dataset; Experiment; Analysis Tool; Sub Project*' **owned** by you (i.e. your user)
4. View the Record Types '*Sample; Dataset; Equipment; Experiment; Analysis Tool; Sub Project*' **owned** by anyone on {{ royce_ampletracks }}
5. List the Record Types '*Sample; Dataset; Equipment; Experiment; Analysis Tool; Sub Project*' **owned** by anyone on {{ royce_ampletracks }}
6. Create relationships between Records owned by anyone and records owned by you on {{ royce_ampletracks }}

:::{note}
You might find yourself using some record types more than others. Not every workflow will need to include all record types.
:::

(create_records)=
## Records

Ampletracks allows the *User* to create *Records* to index digital representations of physical and digital objects, and fill them with detailed metadata about those objects.

Using Ampletracks as a Sample Tracking app relies on 3 types of *Records* and 3 types of relationships, both intrisic and extrinsic.

{numref}`ampletracks-simple-workflow` illustrates the 3 types of records with 2 of those extrinsic relationships. The *Record* ***Sample***, a digital representation adn metadatat record of a physical object, is related to a *Record* ***Dataset*** that is created by acquiring data about that ***Sample*** on a piece of measurement equipment. The *Record* ***Dataset*** is related to the *Record* ***Equipment*** that was used to acquire that dataset.

:::{figure} ../images/ampletracks/ampletracks_workflow_simple.png
:name: ampletracks-simple-workflow
:width: 75%

The basic Ampletracks *Record* indexing and *Record Type* to *Record Type* relationship workflow
:::

{numref}`ampletracks-simple-workflow-extended` illustrates the same relationships illustrated in {numref}`ampletracks-simple-workflow` with the intrinsic *Record* to *Child Record* relationship in the ***Sample*** *Record*.

:::{figure} ../images/ampletracks/ampletracks_workflow_simple_with_children.png
:name: ampletracks-simple-workflow-extended
:width: 75%

The basic Ampletracks workflow, with the intrinsic *Record* to *Child Record* relationship
:::

### Sample Records

Sample records are digital representations of physical objects. These physical objects are laboratory samples, be it metals, batches of powder, coatings on substrates, or chemicals. Ampletracks has an inbuilt intrinsic *Record* to *Child Record* relationship, which can be utilised to relate 'master' samples, such as a large batch of power, or a large ingot of metal to 'sub-samples' such as a decant of powder taken for a specific measurement, or an ingot cutoff, respectively. This allows a *User* to keep a registry of the history of everything that has been 'done' to a sample, whether synthesized in lab, or received from a research partner.

(create_sample)=
#### Creating a Sample Record

To create a ***Sample*** *Record*:

1. Navigate to the *Records* listing, **item 1** in {numref}`records-list`
2. Hover over the dropdown menu in **item 2** of {numref}`records-list` 
3. Choose 'Sample', as illustrated in {numref}`record-switch`
4. Click on the 'Add Sample' button, **item 5** in {numref}`records-list`

:::{figure} ../images/ampletracks/royce_ampletracks_record_switch.png
:name: record-switch
:width: 40%

The Ampletracks *Record* listing switch menu
:::

(add_sample_details)=
##### Add Sample Record details

At the top of the **Sample** *Record* form, shown in {numref}`sample-form-top`, you will see some general fields inbuilt into each *Record Type*.

:::{figure} ../images/ampletracks/royce_ampletracks_sample_form_top.png
:name: sample-form-top
:width: 75%

The Ampletracks ***Sample*** *Record* form Top
:::

:::{note}
The **Sample** *Record* form is quite extensive, although not all fields are mandatory, as it is we will not be able to show the full form on this page.
:::

- **Item 1** allows you to save the record as you go, save and close, or back out of record creation, or editing
- **Item** 2 allows you to add relationships to pre-existing *Records*, or create a new *Record* based on the *Record Type* of the *Relationship* you are wanting to specify
- **Item 3** is where the owner is specified, this is by Default, the *User* creating the *Record*
- **Item 4** is where the *Project* (or Grant) a *User* belongs to is specified
  :::{caution}
  A *User* can belong to several *Projects*. Take care to specify the correct *Project* a *Record* belongs to.
  :::
- **Item 5** is where a *User* can add, remove, or create new QR code labels. Each label has a unique number that identifies it, which is distinct and not related to the *Record* ID. You can see this difference in **item 3** of {numref}`add-child-sample` We will look at QR codes in Section {ref}`add-qr`

{numref}`sample-form-extended` shows most of the **Sample** *Record* form that a *User* would fill in with details about the sample

:::{figure} ../images/ampletracks/royce_ampletracks_sample_form_extended.png
:name: sample-form-extended
:width: 90%

The Ampletracks ***Sample*** *Record* form
:::

(create_child_sample)=
#### Creating a 'Sub'-Sample Record

The following can be referred to when creating Sub-*Records* (*Child Records*) of any *Record Type*.

:::{figure} ../images/ampletracks/royce_ampletracks_add_child_cog.png
:name: add-child-sample
:width: 90%

The Ampletracks **Sample** *Record* form
:::

To create a **Sub-Sample** (*Child*) *Record*, you must first create a **Sample** *Record*. Following that, there are **two ways** to create a *Child Record*, creating it from the *Record* listing or from within the *Record*.

:::{hint}
You can create a *Child Record*  for any *Record* within a *Record Family Tree*, i.e. you can create a *Child Record* of a *Child Record*.
:::

##### Create a *Child* from a *Record* listing

1. Navigate to the *Record* listing of the *Record Type* of interest
2. Hover over the cog (<i class="bi bi-gear-wide"></i>) icon of the *Record* of interest, illustrated in **item 1** of {numref}`add-child-sample`
3. You will then see a hover menu, **item 2** of {numref}`add-child-sample`
4. Click on 'Add Child'
5. You will be redirected to a *Child Record* form, with some inherited fields already filled in

##### Create a *Child* from within the *Parent record*

:::{figure} ../images/ampletracks/royce_ampletracks_add_child_from_record.png
:name: add-child-from-record
:width: 90%

Adding a Child from *Record* View
:::


(edit-record)=
#### Editing a Record

:::{figure} ../images/ampletracks/royce_ampletracks_edit_record_mode.png
:name: edit-record-mode
:width: 90%

The Ampletracks Edit *Record* mode
:::

You can enter the *Record* editing mode for any *Record* that your *User* owns (this excludes **Equipment** *Records* where you need to have elevated permissions to edit beyond creating them).

There are **two ways** to access the *Record* editing mode. Either from the *Records* listing or from within the *Record*.

##### Access edit mode from the *Record* listing

1. Navigate to the *Record* listing of the *Record Type* of interest
2. Hover over the cog (<i class="bi bi-gear-wide"></i>) icon of the *Record* of interest, illustrated in **item 1** of {numref}`add-child-sample`
3. You will then see a hover menu, **item 2** of {numref}`add-child-sample`
4. Click on 'Edit'
5. You will be redirected to the Edit *Record* form, shown in {numref}`edit-record-mode`
6. To save changes whilst editing click ***Save*** (**item 1** in {numref}`edit-record-mode`), or ***Save \& Close*** (**item2** in {numref}`edit-record-mode`) to exit

##### Access edit mode from the *Record*

1. Navigate to the *Record* listing of the *Record Type* of interest
2. Hover over the cog (<i class="bi bi-gear-wide"></i>) icon of the *Record* of interest, illustrated in **item 1** of {numref}`add-child-sample`
3. You will then see a hover menu, **item 2** of {numref}`add-child-sample`
4. Click on 'View'
5. When in *Record* view you will see an interface like in {numref}`add-child-from-record`
6. Press on **item 1**, from {numref}`add-child-from-record`, *Edit*, to enter *Record* editing mode
7. To save changes whilst editing click ***Save*** (**item 1** in {numref}`edit-record-mode`), or ***Save \& Close*** (**item2** in {numref}`edit-record-mode`) to exit

(create_dataset)=
### Dataset *Records*

(create_equipment)=
### Equipment *Records*

(add-qr)=
### Adding a QR code to a *Record*

There are several ways to associate a QR code with a *Record*. In most cases, it is simpler to associate a *reserved* QR code to a *Record*, rather than generate one within the *Record*. Nevertheless, we will show you how to associate QR code labels, and generate them within the *Record*.

(add-reserved-qr)=
#### Adding a *reserved* QR code

A *reserved* QR code is one where a sheet of several QR code labels, that are not yet associated with *Records*, has been printed out.

Usually, we add QR code labels to physical *Records*, i.e. a physical *Sample*.

Upon receipt of your QR code label sheet, you will have 56 *reserved* QR code labels in your possession. A digital representation of part of such a sheet of label is presented in {numref}`qr-labels-demo`. **Item 1** shows where the QR code ID would be. For **item 1** we will be ignoring preceding zeroes, i.e. if our QR code label had ID `0000472`, the label ID number is `472`. **Item 2** is the QR code that when scanned will redirect you to the *Record* associated with the QR code.

:::{figure} ../images/ampletracks/demo_ampletracks_example_qr_code_sheet.png
:name: qr-labels-demo
:width: 90%

Example QR code labels
:::

:::{attention}
You can obtain a sheet of *reserved* QR codes from your {{ royce_ampletracks }} administrator.
:::

To associate a QR label with your *Record*:

1. Navigate to the listing of the *Record Type*
2. Enter *Record* **edit** mode in any way described in the {ref}`edit-record` section
3. Navigate to the **Labels** box, as shown in {numref}`labels-box`
4. Type your QR code ID number into the text box
5. Either:
   1. Click Save
   2. Or,
      1. Click out of the text box
      2. A <span class="badge bg-light" style="background-color:#1a7182 !important;">Submit</span> button will appear
      3. Click the <span class="badge bg-light" style="background-color:#1a7182 !important;">Submit</span>Submit</span> button

:::{figure} ../images/ampletracks/royce_ampletracks_labels_box.png
:name: labels-box
:width: 90%

The assign label ID box
:::

#### Adding a **new** *reserved* QR code or **remove** QR code

There are certain circumstances that would require you to associate a new *reserved* QR code label to a *Record. For instance, the original physical QR code label getting damaged and not being able to be properly read by a scanner.

In this case, the procedure is the same as the one described in section {ref}`add-reserved-qr`.

Following that, the *User* will decide whether to disassociate a QR label ID with the *Record*. The process of disassociating a QR label ID with a *Record* is as follows,

1. Navigate to the listing of the *Record Type*
2. Enter *Record* **edit** mode in any way described in the {ref}`edit-record` section
3. Navigate to the **Labels** box, as shown in {numref}`labels-box`
4. Click the <span class="badge bg-light" style="background-color:#1a7182 !important;">Remove label</span> button
5. A text box will appear, as shown in {numref}`remove-label`
6. Type the QR label ID number you wish to remove from the *Record* in the text box
7. Click <span class="badge bg-light" style="background-color:#1a7182 !important;">Submit</span>

:::{figure} ../images/ampletracks/royce_ampletracks_remove_label.png
:name: remove-label
:width: 90%

Example QR code labels
:::

#### Scanning a *reserved* QR code to Create a *Record*

:::{figure} ../images/ampletracks/royce_ampletracks_scan_label.png
:name: scan-label
:width: 70%

The 'Scan Label' button
:::

**SECTION UNDER CONSTRUCTION**

:::{important}
The following instructions will work on both Desktop and Mobile Phone browsers.
:::

Within the main user interface of {{ royce_ampletracks }},

1. Ensure that you are logged in to Ampletracks on your browser of choice.
2. Either,
   1. Click on 'Scan Label' on the top right menu bar, {numref}`scan-label`
      1. You will be redirected to the 'Label Scanner' page, {numref}`scan-label-page`
      2. You will need to give your browser permission to use the camera
      3. Place the label in view of the Camera
   2. Scan the label with a QR scanner
      1. ...

:::{figure} ../images/ampletracks/ampletracks_label_scanner_pc.png
:name: scan-label-page
:width: 90%

The 'Label Scanner' page
:::

#### Creating a QR code within the *Record*

:::{warning}
This is not recommended unless you have the recommeded blank label papers. Our standard type of blank sheet is *Avery B7651* which can be used to print 65 labels.
:::

We will be creating a brand new label within *Record* **edit** mode.


:::{figure} ../images/ampletracks/create_new_label.png
:name: create-label-configurer
:width: 100%

Create a label configurer
:::


1. Navigate to the listing of the *Record Type*
2. Enter *Record* **edit** mode in any way described in the {ref}`edit-record` section
3. Navigate to the **Labels** box, as shown in {numref}`labels-box`
4. Click the <span class="badge bg-light" style="background-color:#1a7182 !important;">Create new label</span> button
5. You will be redirected to a the *Create Label* preview page where you can configure your label printing by selecting the size of label, by selecting the layout, and which region it will be printed on the blank sheet, shown in {numref}`create-label-configurer`
6. Click on the <span class="badge bg-light" style="background-color:#1a7182 !important;">Download Labels</span> button, which will download the label sheet as a PDF on your local drive
7. Print the PDF of the label on one of the recommended blank label sheets

:::{important}
We recommed you first print out the labels on blank plain paper so you can make any scale adjustments within a PDF editor.
:::



## Record Relationships

### Relationships between *Record Types*

We have specified a number of *Record Type* <i class="bi bi-arrow-left-right" style="stroke-width:4;"></i> *Record Type* relationships in {{ royce_ampletracks }}. Please see {numref}`royce-ampletracks-relationships` for these *Relationships*.

:::{list-table} *Relationships* in {{ royce_ampletracks }}
:header-rows: 1
:name: royce-ampletracks-relationships

* - ***Record Type***
  - **relates to**
  - ***Record Type***
  - **Notes**


* - Sample
  - Belongs to
  - Sub project
  -

* - 
  - Was produced in
  - Experiment
  -

* - 
  - was measured using
  - Equipment
  - 

* - 
  - Gave rise to
  - Dataset
  - 

* - Equipment
  - Used on
  - Sample
  - for data acquisition or measurements

* - 
  - Used to produce
  - Sample
  - for sample creation or synthesis

* -
  - Produced
  - Dataset
  -

* -
  - Was used in
  - Experiment
  -

* - Dataset
  - was produced in the sub project
  - Sub Project
  - 

* - 
  - Was produced using
  - Equipment
  - 

* - 
  - Relates to
  - Sample
  - 

* - 
  - Was produced in
  - Experiment
  - 

* - 
  - was analysed by
  - Analysis Tool
  - 

* - Analysis Tool
  - analysed
  - Dataset
  - 

* - Sub project
  - owns
  - Sample
  - 

* - 
  - produced
  - Dataset
  - 

* - 
  - includes
  - Experiment
  - 
:::

### Create a relationship between two records

There are a number of relationships specified between *Record Types* on {{ royce_ampletracks }}. These *Record Type* to *Record Type* relationships are extrinsic, as opposed to the intrinsic *Parent* <i class="fa-sharp fa-solid fa-arrow-right"></i> *Child* relationships that can be created within a *Record*.

:::{figure} ../images/ampletracks/royce_ampletracks_add_relationship.png
:name: add-relationship
:width: 90%

Create *Relationships* between *Records*
:::

To add a *Relationship* between *Records* of different *Record* type,

1. Navigate to the *Record* you are interested in and enter **Edit** mode
2. Choose the '--- Add new relationship ---' dropdown, **item 1** in {numref}`add-relationship`
3. Choose the relationship type (these are specific to other *Record Types*), **item 2** in {numref}`add-relationship`
4. Start typing in the name of the *Record* you want to relate to the *Record* in **Edit** mode, {numref}`add-relationship-dropdown`
5. You will then see a number of *Records* listed as `ID:Name-of-Record Name-of-Owner`
6. Choose the *Record* you want to relate to the *Record* in **Edit** mode or to Create a new *Record*
7. ***Save*** (**item 1** in {numref}`edit-record-mode`), or ***Save \& Close*** (**item2** in {numref}`edit-record-mode`) to exit

:::{figure} ../images/ampletracks/royce_ampletracks_add_relationship_dropdown.png
:name: add-relationship-dropdown
:width: 90%

Various *Records* for *Relationship* option
:::
