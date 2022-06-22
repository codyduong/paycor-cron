# paycor-cron
Clocking in and clocking out is a form a micromanagement. I protest it by making a tool which clocks me in at intervals...

I would've done it using the APIs purely, but looks like too much of a pain in the ass to reverse engineer so this works via Cypress

`cypress.env.json`
| Key      | Value |
| ----------- | ----------- |
| USER      | paycor username       |
| PASS   | paycor password        |
| PAY_MF_PRO | `paycorMFProduction`: value to verify w/o 2FA | 

