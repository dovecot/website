Dovecot websites
================

This repository is for maintaining Dovecot's public websites.

Map of websites

 - main => dovecot.org website
 - repo => repo.dovecot.org

Building a website
------------------

You can use npm run -w <website> run docs:build

Adding new one
--------------

Use `npm init -w ./name` to add new website. This should get added into package.json too

Testing
-------
Push changes first to `develop` branch to make sure they work, this will deploy as https://wwwdev.dovecot.org.
Once you've checked your changes, create pull request to main branch.
