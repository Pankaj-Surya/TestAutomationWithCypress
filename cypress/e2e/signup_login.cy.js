// Custom command to wait until an element is enabled
Cypress.Commands.add('waitUntilEnabled', (selector) => {
    cy.get(selector).should('not.be.disabled');
  });
  
  describe('User Signup and Login Demo Test', () => {
    it('Should sign up and log in successfully', () => {
      const inputCountry = 'India';
      cy.visit('/');
  
      // Click on the signup button
      cy.get("div[class='MuiBox-root css-m7nve9'] button:nth-child(2)").click();
  
      // Generate a random number for a unique email
      const randomNumber = Math.floor(Math.random() * 900000) + 100000;
      const email = `lowana${randomNumber}@capure.com`;
      const password = 'Password123!'; // You can generate a random password if needed
  
      // Enter valid credentials for signup
      cy.get('#mui-2').type(email);
      cy.get("button[type='submit']").click();
      cy.get('#mui-3').type(password);
      cy.get('#mui-4').type(password);
      cy.get('button[type="submit"]').click();
  
      // Enter OTP
      for (let i = 1; i <= 6; i++) {
        cy.get(`input[aria-label="Please enter OTP character ${i}"]`).type(i.toString());
      }
      cy.get('button[type="submit"]').click();
  
      cy.wait(4000); // wait for 4 seconds
  
      // Choose location
      cy.get("input[id='mui-8']").click({ force: true }).type('ind');
      cy.get('#mui-8-listbox li[class="MuiAutocomplete-option"]').each(($el) => {
        if ($el.text() === inputCountry) {
          $el.click();
        }
      });
  
      // Enter phone number and proceed
      cy.get("#mui-9").type('7733445566');
      cy.get("#mui-11", { timeout: 10000 }).should('be.visible').and('not.be.disabled').click();
  
      // Enter OTP for phone verification
      for (let i = 1; i <= 6; i++) {
        cy.get(`input[aria-label="Please enter OTP character ${i}"]`, { timeout: 5000 }).type(i.toString());
      }
      cy.get("#mui-10").should('be.visible').and('not.be.disabled').click();
  
      // Assert that the current URL matches the expected URL after login
      cy.url().should('eq', 'https://dev-fe.buttonshift.com/community');
  
      // Logout
      cy.xpath("//div[@class='MuiBox-root css-1w0dmnq']").click();
      cy.xpath("//button[@aria-label='Logout']//*[name()='svg']").click();
  
      // Log in with newly registered user
      cy.visit("/auth");
      
      // Use the generated email and password for login
      cy.get("input[type='text']", { timeout: 4000 }).type(email);
      cy.get("button[type='submit']").click();
      cy.get("input[type='password']").type(password);
      cy.get('button[type="submit"]').click();
  
      // Assert successful login by checking the URL
      cy.url().should('eq', 'https://dev-fe.buttonshift.com/community');
    });
  });
  