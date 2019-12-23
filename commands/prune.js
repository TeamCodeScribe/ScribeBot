module.exports = {
	name: 'clear',
	description: 'clear',
	execute(message, args) {
		const amount = parseInt(args[0].split(',')) + 1;
		// const amount = split[0];
		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.' + amount);
		}
		else if (amount < 2 || amount > 100) {
			return message.reply('you need to input a number between 2 and 100.' + amount);
		}

		message.reply('You entered: ' + amount + ' ' + args + ' ');

		message.channel.bulkDelete(amount);
	},
};
