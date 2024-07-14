// Custom command to wait until an element is enabled
Cypress.Commands.add('waitUntilEnabled', (selector) => {
    cy.get(selector).should('not.be.disabled');
  });
  
  describe('User Signup and Form Validations', () => {
    it('Should validate form fields and display errors correctly', () => {
      // Visit the homepage
      cy.visit('/');
  
      // Click on the signup button
      cy.get("div[class='MuiBox-root css-m7nve9'] button:nth-child(2)").click();
  
      // Generate a random number for a unique email
      const randomNumber = Math.floor(Math.random() * 900000) + 100000;
      const email = `lowana${randomNumber}@capure.com`;
      const invalidEmail = 'invalidemail'; // Invalid email format
  
      // Try to submit without filling any fields
      cy.get("button[type='submit']").click();
      cy.contains('Email is required').should('be.visible');
  
      // Fill email field with an invalid email format
      cy.get('#mui-2').type(invalidEmail);
      cy.get("button[type='submit']").click();
      cy.contains('Please enter a valid email address').should('be.visible');
      cy.get('#mui-2').clear(); // Clear the email field after capturing error
         //dddc  ddmd
      // Fill email field with valid email and proceed
      cy.get('#mui-2').type(email);
      cy.get("button[type='submit']").click();
  
      // Fill password fields with invalid format
      cy.get('#mui-3').type('short'); // Invalid short password
      cy.get('#mui-4').type('short');
      cy.get('button[type="submit"]').click();
      cy.contains('password must be at least 8 characters').should('be.visible');
      cy.get('#mui-3').clear(); // Clear the password fields after capturing error
      cy.get('#mui-4').clear();
  
      // Fill password fields with valid password and proceed
      cy.get('#mui-3').type('ValidPassword123!');
      cy.get('#mui-4').type('ValidPassword123!');
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
        if ($el.text() === 'India') {
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
    });
  });
  