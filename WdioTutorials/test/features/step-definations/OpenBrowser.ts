import { Given ,When ,Then } from "@wdio/cucumber-framework";


Given("Google.com page should open", async function(){

    await browser.url("http://www.google.in")

    await browser.maximizeWindow()

    await $("//textarea[@title='Search']").setValue("Testing")

    await browser.pause(2000);

})


Given(/^Open Amazon Website$/,async function(){

await browser.url("https://amazon.com")

await browser.maximizeWindow()
    
})


Then(/^mouse should move on account list webelement$/,async function(){

    let accountlist = await $("//span[text()='Account & Lists']");
    await accountlist.moveTo()

    await browser.pause(3000)

    
})


Then(/^click on the account link$/,async function(){

    await $("//span[text()='Account']").click()
    await browser.pause(3000)
    
})


Given(/^Open TestAutomation Practice website$/,async function(){

    await browser.url("/")

await browser.maximizeWindow()

})

Then(/^Click on Copy Text Button$/,async function(){

    let copytextbutton = await $("//button[text()='Copy Text']")

    await copytextbutton.doubleClick()

    await browser.pause(3000)

})


Then(/^Drop in to the target position$/,async function(){

    let SP = await $("#draggable")
    let target = await $("#droppable");

    await SP.dragAndDrop(target)

    await browser.pause(3000)

})


Then(/^Select country from dropdown$/,async function(){

    let Countryname = await $("#country");

    await Countryname.selectByAttribute('value','germany');

    await browser.pause(2000)


    await Countryname.selectByVisibleText('Japan');

    await browser.pause(4000);


    await Countryname.selectByIndex(2)

    await browser.pause(4000);


    let countrycount = await $$("#country option")

    console.log("Country lenghth is : "+countrycount.length)

    for(let i = 0 ; i<countrycount.length ;i++)
    {
        console.log(countrycount[i].getText())
    }


})


Then(/^Select Country with (.*)$/,async function(CountryName){

    let Countryname = await $("#country");

    await Countryname.selectByVisibleText(CountryName);

    await browser.pause(4000);

})

Then(/^Upload file from the FileUpload Folder$/,async function(){

 await $("#singleFileInput").addValue(`${process.cwd()}/data/FileUpload/demo.txt`)
 await $("//button[text()='Upload Single File']").click()

    await browser.pause(4000);

})

Then(/^Validate Start button is diplayed$/,async function(){

    console.log(`start button locator : ${process.env.StartButton}`)

    let ActualResult = await $(process.env.StartButton).isDisplayed();

    expect(ActualResult).toEqual(true)


    let ActualText = await $("(//h2[@class='title'])[1]").getText()


    expect(ActualText).toEqual("Upload Files")


    let ActualData = await $(process.env.StartButton);
    expect(ActualData).toBeDisplayed()
})

