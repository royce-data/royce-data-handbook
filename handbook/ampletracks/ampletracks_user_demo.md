# Ampletracks user tutorial - steel

In this tutorial, we will be using the **Demo** instance of Ampletracks. You can follow along in two ways:

1. If you have a working instance of Ampletracks running, you can import the relevant **Record Type** schemata from our GitHub repository <https://github.com/Ampletracks/Ampletracks>
2. You can register your details and get an instance-on-demand for a week. Please see our [instance-on-demand guide](./ampletracks_iod.md)
   ```{attention}
   Be sure to check your spam folder.
   ```

If you are setting up your own Ampletracks be sure to check the [optional steps](content:references:optional-steps) to ensure that you have all the appropriate records and relationship pairs specified. These will already be available on [instance-on-demand](https://demo.ampletracks.com/iod//).

## Context

In this tutorial we will assuming a study investigating the oxidation behaviour related to chromium content by weight % (wt.%) in three different steel compositions. Each of the three different steel compositions has increasing chromium content. We will be creating three bulk *parent* sample **Records** for each of these compositions. Each will be sectioned into to 5 regular 5mmx5mmx5mm **child Record** samples using wire electric discharge machining (wire EDM). These will then undergo thermogravimetric analysis in air. After that, the samples will be mounted in cold mounting resin and ground up to reveal the cross-section. Once the samples are prepared, they will be imaged with scanning electron microscopy  (SEM) and analysed with energy dispersive X-ray spectroscopy (EDX).

For simplicity we will only be tracking 3 bulk *parent* samples and *child* samples in this tutorial. For a thorough tutorial, please use [this guide](./ampletracks_demo_extended.md) <span class="badge bg-warning">Currently under construction</span>.

This tutorial was partly inspired by the work of {cite:t}`Li2016` but will deviate from it.


## Tutorial

### Ampletracks features

This tutorial will familiarise you with the Ampletracks features of `creating` and `cloning` records, `adding` *child* records to *parent* records, and `adding` relationships between records of different type.

All sections of this tutorial will be accompanied by images below the steps. For steps which follow similar steps we will not be providing as many images.

### Create a sub-project

1. On the top right-hand side menu panel of the Ampletracks user interface (UI), ensure that you are *Currently viewing __Sub project__* {numref}`fig-demo-sub-project-view`
2. (optional) If you are not within the **Sub project** listing, navigate to the top right-hand side menu panel, hover over the bottom arrow and click on *Switch to __Sub project__* on the menu that appears {numref}`fig-ampletracks-switch-record-type-panel`
3. Click on the *Add __Sub project__ button*, this should either be on the right-hand corner above the listing table or underneath the **Sub project list** title depending on the size of your viewport {numref}`fig-ampletracks-add-sub-project`
4. Ensure that the correct ***Project*** is selected under the **Ownership** section on the form, if you are part of multiple projects {numref}`fig-ampletracks-ownership`
5. Fill in the text boxes either by
   1. Inspecting the form and filling any with relevant details as you see fit, **or**
   2. Navigate to *Project name:* and fill the text box with
   > Oxidation behaviour of chromium containing steel
   3. Navigate to *Name of project contact* and fill the text box with your name, an example name, or the person who is responsible for this project
   ```{hint}
   This could be you, your principal investigator (PI) of the project, your PhD supervisor, or a postdoctoral researcher within your group that is supervising you.
   ```
   4. Navigate to *Project description* and fill the text box with
   > Investigating the effect of increasing chromium content to the oxidation resistance of chromium containing steels, from 0 wt.% chromium to 1.0 wt.% chromium.
6. Populate the other fields at your discretion and to get a feel for the **Sub project** form
7. Click on the <span class="badge bg-light" style="background-color:#1a7182 !important;">Save & Close</span> button
8. You will be redirected back to list view



:::{admonition} Visual guide

```{figure} ../images/ampletracks/demo_ampletracks_sub_project_view.png
---
name: fig-demo-sub-project-view
alt: Sub project view on the Ampletracks UI
scale: 50%
---
**Sub project** view on the Ampletracks UI
```

```{figure} ../images/ampletracks/demo_ampletracks_switch_panel.png
---
name: fig-ampletracks-switch-record-type-panel
alt: Ampletracks switch record type panel
scale: 50%
---
The Ampletracks switch record type panel
```

```{figure} ../images/ampletracks/demo_ampletracks_add_sub_project.png
---
name: fig-ampletracks-add-sub-project
alt: Ampletracks switch record type panel
scale: 50%
---
Add **Sub project**
```


```{figure} ../images/ampletracks/demo_ampletracks_ownership.png
---
name: fig-ampletracks-ownership
alt: Ampletracks record ownership section
scale: 50%
---
Add **Sub project**
```

:::

### Create samples

#### Create Sample

1. On the top right-hand side menu panel of the Ampletracks user interface (UI), ensure that you are *Currently viewing __Sample (Demo)__*
2. (optional) If you are not within the **Sample (Demo)** listing, navigate to the top right-hand side menu panel, hover over the bottom arrow and click on *Switch to __Sample (Demo)__* on the menu that appears
3. Click on the *Add __Sample (Demo)__ button*, this should either be on the right-hand corner above the listing table or underneath the **Sub project list** title depending on the size of your viewport
4. Ensure that the correct ***Project*** is selected under the **Ownership** section on the form, if you are part of multiple projects
5. Fill in the text boxes either by
   1. Inspecting the form and filling any with relevant details as you see fit, **or**
   2. Navigate to *Unique name of the sample* and fill the text box with a **unique name**, for the purposes of this tutorial the tutorial writer uses
   > Chromium steel 0000
   3. Navigate to *Material* and fill the text box with
   > Steel alloy
   4. Navigate to *What is the composition of the sample* and
      1. Select the <span class="badge bg-light" style="color:black; font-weight:strong; font-size:larger;">+</span> button, you should see a periodic table open up {numref}`fig-demo-add-elements`
      2. Select elements Carbon (C) Silicon (Si) Chromium (Cr) Manganese (Mn) Phosphorus (P) Surlfur(S) and Iron (Fe)
      3. Select the *wt.%* composition declaration on the right-hand corner {numref}`fig-demo-weight-pct-declarations`
      4. Click on the number at the bottom right of the square housing Fe, set it to 1
      5. Now repeat this for each of the other elements according to the table below, you will see that Fe balances automatically
   
      ```{list-table} First *parent* sample composition
      :header-rows: 1
      :name: label-to-reference
      
      * - C
        - Si
        - Cr
        - Mn
        - P
        - S
        - Fe
      * - 0.00019
        - 0.00011
        - 0
        - 0.00020
        - 0.00015
        - 0.00007
        - Bal.
        ```
      
   5. Navigate to *Has this sample been manufactured in-house or received?* Select the radio button on the left of:
   > Received
   6. The *Who supplied this sample?* field will now appear
   7. Select
   > Research partners (Public research institution)
   8. Scroll to *Who is responsible for this sample?*
   9.  Select the most appropriate choice for you
   10. Fill in the contact fields as you please
   :::{warning}
   For your privacy, please do not supply your personal information
   :::
   11. Click on the <span class="badge bg-light" style="background-color:#1a7182 !important;">Save & Close</span> button
   > Investigating the effect of increasing chromium content to the oxidation resistance of chromium containing steels, from 0 wt.% chromium to 1.0 wt.% chromium.


```{figure} ../images/ampletracks/demo_ampletracks_add_elements.png
---
name: fig-demo-add-elements
alt: Add elements to composition
scale: 50%
---
Add elements to composition
```

```{figure} ../images/ampletracks/demo_ampletracks_select_wt_percent.png
---
name: fig-demo-weight-pct-declarations
alt: Ampletracks weight percent declaration
scale: 50%
---
Create composition with weight percent declaration
```

(relate-to-sub-project)=
##### Relate sample to sub-project

1. Navigate to the sample we just created
2. Select the <span class="badge bg-light" style="background-color:#1a7182 !important;">Edit</span> button
3. Select the `-- Add new relationship --` drop-down box under the **Relationships** section
4. Select *is part of* to create a ***Sample*** to ***Sub project*** relationship
5. Type in 'oxi' in the search box that will have appeared
6. Select the name you gave to your sub-project, which is *Oxidation behaviour of chromium containing steel* for the tutorial writers {numref}`fig-select-sub-project`
7. Click on the <span class="badge bg-light" style="background-color:#1a7182 !important;">Save & Close</span> button

```{figure} ../images/ampletracks/demo_ampletracks_add_relationship_sub_project.png
---
name: fig-select-sub-project
alt: Select sub project relationship
scale: 50%
---
Create relationship from ***Sample*** to ***Sub project***
```


#### Clone initial sample

We will now create the next two bulk material samples by using the `clone` feature on Ampletracks.

1. Navigate to the *Sample* Record list view
2. Locate the sample record we just made
3. Hover over the cog <span class="fas fa-cog"><span> icon
4. Select the **Clone** from the hover menu, you will be redirected to a sample form for the cloned *Sample*
5. Edit cloned *Sample* record
   1. Click on the <span class="badge bg-light" style="background-color:#1a7182 !important;">Edit</span> button
   2. Change the name to
      > Chromium steel 0005
   3. Change the content of Chromium to 0.005
   4. Click on the <span class="badge bg-light" style="background-color:#1a7182 !important;">Save & Close</span> button
6. Follow the steps outline in the [section above](#relate-sample-to-sub-project) to relate the sample to the sub project we created
7. Repeat all steps from step 1 - 6
   1. Use the following name for the newly cloned sample
      >  Chromium steel 0010
   2. Change the content of Chromium to 0.01


### Create child samples

:::{caution}
For simplicity, we will only be creating child samples for the sample we named
> Chromium steel 0005
:::

1. Navigate to the *Sample* Record list view
2. Locate the sample record 'Chromium steel 0005'
3. Hover over the cog <span class="fas fa-cog"><span> icon
4. Select the **Add Child** from the hover menu, you will be redirected to a sample form for the child *Sample*
5. Change the name to
   > Chromium steel 0005 EDM cube 01
6. Explore other fields
7. Fill in other fields within the form as you see fit for the sample and our known process history
8. Click on the <span class="badge bg-light" style="background-color:#1a7182 !important;">Save</span> button
9. Scroll up to the **Relationships** section
   1. Click on the `--- Add new relationship ---` drop down menu
   2. Select
      > was made using 
   3. Type 'EDM' into the search box, or the most appropriate *Equipment* name for you
   4. Select the piece of equipment
   5. Click on the <span class="badge bg-light" style="background-color:#1a7182 !important;">Save</span> button
10. Click on the <span class="badge bg-light" style="background-color:#1a7182 !important;">Save</span> button
11. Explore what other relationships and with what pieces of equipment are available to the *Sample* record type
12. Create a relationship between the record and your *Sub project*
    :::{hint}
    You can search for records to relate to the currently active record using your name within the Ampletracks app
    :::
13. Click on the <span class="badge bg-light" style="background-color:#1a7182 !important;">Save & Close</span> button
14. Repeat steps 1 - 6 twice
   1. Name the new child samples 'Chromium steel 0005 EDM cube 02' and 'Chromium steel 0005 EDM cube 03'
15. Locate sample record 'Chromium steel 0005'
16. Click on the <span class="badge bg-light" style="background-color:#1a7182 !important;">Edit</span> button
17. Navigate to *Process history* field
18. Update the *Process history* field with
    > Was machined by wire EDM to produce 3 cubic 5mmx5mmx5mm child samples   

:::{hint}
Another method to create a child record is to navigate to the record we are interested in and click on the <span class="badge bg-light" style="background-color:#1a7182 !important;">+ New child record</span> button under the *Descendants* title

```{image} ../images/ampletracks/demo_ampletracks_add_child_descendants.png
---
scale: 35%
---
```
:::

### Relate samples to other records

#### Equipment

We have see above how to create relationships between pre-existing records such as equipment.

- Look at what other types of relationships exist for samples
- Is there a rewlationship that satisfies characterisation?
- Can you identify a piece of equipment to relate the sample to? 

#### Creating a record on relationship - Dataset

For this part of the tutorial we are assuming that we have imaged our sample already and created a relationship with the equipment that imaged it

1. Navigate to your sample of interest
2. Click on on the <span class="badge bg-light" style="background-color:#1a7182 !important;">Edit</span> button
3. Scroll to the **Relationships** section
   1. Click on the `--- Add new relationship ---` drop down menu
   2. Select
      > was measured to produce 
   3. Start typing in the text box the name of the *Dataset* record we want to create
      :::{hint}
      You only need 3 characters for search to begin.
      You can use wilcard characters such as `%%%` or `___` to show everything you have available for relationship creation between records.
      ::: 
   4. Click on *Add new record*. You will be redirected to a *Dataset* creation page
   5. Fill in the details of your dataset
   6. Click on the <span class="badge bg-light" style="background-color:#1a7182 !important;">Save</span> button

(content:references:optional-steps)=
## Optional steps

For the following step you will need to be granted elevated access to an administrative role at the project level.

You might have noticed that we have yet to create a piece of equipment for sample preparation, such as a sample mounting press and a horizontal grinding wheel.

In the following set of instructions, create an equipment record for either of these pieces of equipment, or a piece of characterisation equipment that you think is necessary for this study.

### Create equipment

1. Switch to the *Equipement* record type listing
2. Click on the <span class="badge bg-light" style="background-color:#1a7182 !important;">Add Equipment</span> button
3. Make sure that the project we are registering this piece of equipment under is 'Central Index'
   :::{figure} ../images/ampletracks/demo_ampletracks_project_select.png
   ---
   
   ---
   Project select drop-down menu in record creation
   :::
4. Fill in the equipment record with the appropriate details
5. Click on the <span class="badge bg-light" style="background-color:#1a7182 !important;">Save & Close</span> button

### Changing user records

When elevated to an administrative role at the *Project* level, you will have the permission to change records from within the *Projects* you have access to.

- Try changing a record you do not own
- Has the UI changed?
  - How?
  - What other features do you have access to?
- Record ownership transfer
  - Try changing the owner of a record from one user to another

<!-- ### Import record types

### Specify relationship pairs -->