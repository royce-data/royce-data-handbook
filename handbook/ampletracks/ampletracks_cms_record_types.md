# CMS Record Type Administration Guide

In this guide we show you how to *create* and *import* a ***Record Type***, and how to *create* ***Record Type*** to ***Record Type*** relationships.

:::{note}
We have intentionally kept the metadata schema very lightweight. Ampletracks has over 13 data field types to choose from, and record types can be configured to have very specific fields that provide rich and descriptive metadata schemas.
:::
<br>

:::{contents}
:local:
:depth: 4
:::

## Create Record Type

In this guide we will be creating a lightweight **Record Type** for laboratory *Equipment*.

1. Navigate to the grey banner menu on the Ampletracks UI
2. Hover over **Schema** on the left-hand side
3. Select **Record Types** from the drop down menu
4. You will see 3 buttons to the right-hand side of the UI
5. Click on the <span class="badge bg-light" style="background-color:#1a7182 !important;">Add Record Type</span> button, you will be redirected to a new page
6. Specify the *Name* and *Public preview message* of the **Record Type** in the text input areas, and, optionally, add a label image
   1. In *Name*, input 'Equipment'
   2. Optionally, in *Public preview message*, input 'This is a piece of data acquisition equipment for our laboratory'
7. Click on the <span class="badge bg-light" style="background-color:#1a7182 !important;">Save</span> or the <span class="badge bg-light" style="background-color:#1a7182 !important;">Save & Close</span> button
8. Back to the **Record Type** list you will see your new **Record Type** listed
9. Hover over the cog icon next to your new **Record Type** listing
10. Select **Data Fields**, you will be redirected to the **Data Field list** for that **Record Type**
11. Click on the <span class="badge bg-light" style="background-color:#1a7182 !important;">Add Data Field</span> button
12. **Data field**: *Name*
    1.  From the drop-down menu under *Type*: select *Textbox*
    2.  From the drop-down menu under *Position*: select *First field*
        :::{hint}
        Once you have more than one data field defined for your Record you will be able to select data field position on the **Record** indexing form relative to the position of the other data fields
        :::
    3. You will then be prompted to provide a *Name*, *Export name* and *Question*, type 'Name' in all these
    4. **Options** - There are several options to configure the behaviour of your data field beyond what it looks like and what types of *answers* it accepts
       1. *Display to the public* will determine whether a data field *answer* is shown when a QR code associated with a ***Record*** is scanned and accessed whilst not logged in or having access to Ampletracks as a *User*
       2. *Required* will determine whether the data field is required for the **Record** to be saved
       3. *Inheritance* determines whether the data field will be inherited by a *Child Record*
       4. ...
13. **Data field**: *Equipment type*
14. **Data field**: *Host institution*
15. **Data field**: *Location*
16. **Data field**: *Description*
17. **Data field**: *Image*
18. **Data field**: *Additional information*
19. **Data field**: *Link*
20. **Data field**: *Contact*
21. **Data field**: *Contact email*


## Import Record Type

1. Navigate to the Ampletracks GitHub [repository](https://github.com/Ampletracks/Ampletracks)
2. From there access the [`example`](https://github.com/Ampletracks/Ampletracks/tree/main/example) directory within the repository 
3. Download the 'barebones' **Sample** **Record Type** [XML specified structure](https://github.com/Ampletracks/Ampletracks/blob/main/example/record_types/RecordTypeStructure-Sample_20231031.xml)
4. Navigate to the grey banner menu on the Ampletracks UI
5. Hover over **Schema** on the left-hand side
6. Select **Record Types** from the drop down menu
7. You will see 3 buttons to the right-hand side of the UI
8. Click on <span class="badge bg-light" style="background-color:#1a7182 !important;">Import</span> button, you will be redirected to a new page
9.  On the new page click on the <input type="button" value="Choose file" style="padding:1px;height:25px;"> button to select a file stored locally on your machine with the file system interaction dialog box
10. Click the <span class="badge bg-light" style="background-color:#1a7182 !important;">Import</span> button once you have selected the file

## Create a Record Type to Record Type Relationship

1. Navigate to the grey banner menu on the Ampletracks UI
2. Hover over **Schema** on the left-hand side
3. Select **Relationships** from the drop down menu
4. You will see 2 buttons to the right-hand side of the UI
5. Click on **Add Relationship Pair**, you will be redirected to a new page
6. You will see a pane where you can select two types of records (whether the same or different) and specify the relationship between them in plain language
7. As an example we will specify a relationship between a **Sample** and a piece of **Equipment**
    1. In the top pane select **Equipment** from the drop down menu
    2. In the bottom pane select **Sample** from the drop down menu
    3. On the left-hand text box type in "was measured using", i.e. "**Sample** was measured using **Equipment**"
    4. On the right-hand text box type in "measured", i.e. "**Equipment** measured **Sample**"
    5. For how many relationships we can have between record type and record type the minimum is 1 and the maximum is 1000000, if you wanted a **Sample** to have a maximum of 10 relationships to a piece of **Equipment** you need to input 10 in the left-hand box underneath _max_