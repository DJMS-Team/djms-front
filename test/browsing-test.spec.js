const {By, Builder, WebElementCondition, until} = require('selenium-webdriver');
const assert = require('assert');
const { time } = require('console');

describe('Browsing Filtering Test', function() {
    this.timeout(20000); 
    it('should list products', async function() {
        let driver;
        try {
            
    
            driver = await new Builder().forBrowser('chrome').build();
            await driver.get('http://localhost:3000/');
            
    
            await driver.wait(until.elementLocated(By.xpath('//*[@id="radix-:Rcpuecq:"]')), 10000);
            let categoryInput = await driver.findElement(By.xpath('//*[@id="radix-:Rcpuecq:"]'));
            await categoryInput.click()
    
            await driver.wait(until.elementLocated(By.xpath('//*[@id="radix-:RcpuecqH1:"]/div[1]')), 10000);
            let appleButton = await driver.findElement(By.xpath('//*[@id="radix-:RcpuecqH1:"]/div[1]'))
            await appleButton.click()
    
            await driver.wait(until.elementLocated(By.xpath('/html/body/div[2]/div/div/div/div/h3')), 10000);
            let tittle = await driver.findElement(By.xpath('/html/body/div[2]/div/div/div/div/h3'))
           
            assert.equal(await tittle.getText(), 'Productos disponibles')
    
           
        }catch(error){
            
            throw error
        }finally{
            await driver.quit();
        }
    
    })

    it('Product search', async function() {
        let driver;
        try {
            
    
            driver = await new Builder().forBrowser('chrome').build();
            await driver.get('http://localhost:3000/');
            
    
            await driver.wait(until.elementLocated(By.xpath('/html/body/div[2]/nav/div/div/div[1]/div[2]/form/input')), 10000);
            let categoryInput = await driver.findElement(By.xpath('/html/body/div[2]/nav/div/div/div[1]/div[2]/form/input'));
            await categoryInput.sendKeys('hp')
    
            let appleButton = await driver.findElement(By.xpath('/html/body/div[2]/nav/div/div/div[1]/div[2]/form/button'))
            await appleButton.click()
    
            await driver.wait(until.elementLocated(By.xpath('/html/body/div[2]/div/div/div/div/h3')), 10000);
            let tittle = await driver.findElement(By.xpath('/html/body/div[2]/div/div/div/div/h3'))
           
            assert.equal(await tittle.getText(), 'Productos disponibles')
    
           
        }catch(error){
            
            throw error
        }finally{
            await driver.quit();
        }
    
    })

    
})


    