# Xero-Utils
Utilities for many sites. These are made to help you in your botting and are also for overall use in javascript.
```
/*
    Hookfunctions: Directly hook into any sites function and replace it with your own.
    It's recommended you use newcclosure to wrap functions instead of the regular function(){} declarator.
    It's crucial especially if you know the site uses function protection.
    newcclosure is harder to detect in environment changes than the regular function hooks.

    Examples on hookfunctions:
*/

// This is an example of a site that tried to bypass my div scrambler and instead block anything that contained "Xero-Bots".
XeroUtils.hookFunction(window, 'checkScriptsBeforeLoad', XeroUtils.newcclosure(
    function(script) {
        if (!script || typeof script != 'string') return console.error('Error with sub-url provided.');

        /*  Original Code:
            if (script.indexOf('Xero-Bots') || document.body.textContent.includes('Xero-Bots')) return console.error('Hey tatsuya ;P');

            It's as simple as just removing that line now, and leaving the rest to execute in the function.
            And now my bots work again.
        */

        return script;
    }
))
```

# io Bots and Protocols for the .io Bots
All deobfuscated cores to the games I've botted before can be found in the deobfuscated-cores folder.
You can make your own bots using them too.

# Dm me if you want any of the games new updated cores. Some here might be outdated.

The bots I've made for games can also be found here. Feel free to edit any code you want. Just leave credits.

If you're having any issues contact me on my discord: Tatsuya#9737 or join my discord server: https://discord.com/invite/bAstbAfem9

If you need any help in any games feel free to contact me there as well.

Wall of smart dev decisions: 
1. https://prnt.sc/O2xW-u6G-Z3s
2. https://prnt.sc/dJM6FnvQDC9A
