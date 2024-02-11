export const aliases: Record<string, string> = {
	'/dashboard/team': 'dashboard.team'
};

export const isActive = (path: string, alias: string) => {
	const aliasInLib = aliases[path] || 'unknown';
	if (aliasInLib === 'unknown') {
		console.error('Unknown path', { path, alias });
		return false;
	}

	return aliasInLib.startsWith(alias);
};
