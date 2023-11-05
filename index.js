const webhookURL = "https://discord.com/api/webhooks/1127178369428095056/uMtICCPo4ndiJkrKRBke0yvcT5Rsq0OUuAfZLwvK7bqARXrGbszTGxq1MsMdVeXDislY" // MANDATORY | Your Webhook URL Here
const avatarURL = "https://noice.milcongift.repl.co/logo.png" // OPTIONAL | The URL for the PFP of the webhook itself. Must be a link to a supported image format.

// Getting the elements from the HTML page
const username = document.getElementById('username')
const usertag = document.getElementById('usertag')
const userID = document.getElementById('userID')
const reason = document.getElementById('reason')
const appeal = document.getElementById('appeal')

function sendMessage() { // After submitting the form.
    var request = new XMLHttpRequest() // Creates a new XML Http Request
    request.open("POST", webhookURL) // Opens a new HTTP Request to the webhook URL
    request.setRequestHeader('Content-type', 'application/json') // Sets the request Type

    var embed = { // Embed to send.
        author: { name: `${username.value}#${usertag.value}` }, 
        title: "New Order!", // Title of the embed 
        timestamp: new Date(), // Footer Timestamp of the embed
        color: 0xFF0000, // Color of the embed
        footer: { text: `User ID: ${(userID.value).toString()}` }, // Footer of the embed
        fields: [ // Fields of the embed
            { name: "User", value: `${username.value}#${(usertag.value).toString()}`, inline: true },
            { name: "UserID", value: `${(userID.value).toString()}`, inline: true },
            { name: "Plan", value: `${reason.value}` },
            { name: "Mail", value: `${mail.value}` },
            { name: "Location", value: `${appeal.value}` },
          { name: "Age", value: `${age.value}` }
        ]
    }

    var params = { // Parameters to send the request
        username: `Pixy Share premium Order`, // Name of the webhook
        avatar_url: avatarURL, // PFP URL of the webhook
        embeds: [ embed ] // Embeds to send with the webhook
    }

    request.send(JSON.stringify(params)) // Sends the request 
  alert('Order successfully sent!')
    alert('Your Redeem code will recive with in 24 or 48hours. Need any help? Make ticket in discord Server. \n\n\ Join discord pixyshare.is-a.dev/discord') // Tells the user that the appeal has been sent.
     // Logs that the order has been sent. (For Your server webhook)
}
