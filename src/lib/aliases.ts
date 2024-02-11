export const aliases: Record<string, string> = {
	'/dashboard': 'dashboard',
	'/dashboard/team': 'dashboard.settings.team',
	'/dashboard/conveyor': 'dashboard.conveyor',
	'/dashboard/progress': 'dashboard.progress',
	'/dashboard/tasks': 'dashboard.tasks'
};

export const isActive = (path: string, alias: string, strict: boolean = false) => {
	const aliasInLib = aliases[path] || 'unknown';
	if (aliasInLib === 'unknown') {
		console.error('Unknown path', { path, alias });
		return false;
	}

	return strict ? aliasInLib === alias : aliasInLib.startsWith(alias);
};
