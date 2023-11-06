const webhookURL = "https://discord.com/api/webhooks/1170740313250340995/CCm33M7ne4MU2eI-K7iznANSSpmPyYG7FGQxZACIiWgZ9VNwK0yl5wWTATuHR-PVq7N-" // MANDATORY | Your Webhook URL Here
const avatarURL = "https://media.discordapp.net/attachments/950712799254941746/950720634881728562/newmilcon-1.png?width=586&height=586" // OPTIONAL | The URL for the PFP of the webhook itself. Must be a link to a supported image format.

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
        footer: { text: `made by dsc.gg/milcondev | User ID: ${(userID.value).toString()}` }, // Footer of the embed
        fields: [ // Fields of the embed
            { name: "User", value: `${username.value}#${(usertag.value).toString()}`, inline: true },
            { name: "UserID", value: `${(userID.value).toString()}`, inline: true },
            { name: "Bot choosen", value: `${reason.value}` },
            { name: "paid ?", value: `${appeal.value}` },
           { name: "Ticket Ok", value: `${ticket.value}` }
        ]
    }

    var params = { // Parameters to send the request
        username: `dsc.gg/milcondev`, // Name of the webhook
        avatar_url: avatarURL, // PFP URL of the webhook
        embeds: [ embed ] // Embeds to send with the webhook
    }

    request.send(JSON.stringify(params)) // Sends the request 
    alert('Order Sent! Make Ticket and enjoy With new bot') // Tells the user that the appeal has been sent.
    console.log('Order sentSent!') // Logs that the order has been sent. (For Your server webhook)
}
