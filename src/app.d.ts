// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	interface Employee {
		name: string;
		email: string;
		phone_number: string;
		role: 'general_contractor' | 'subcontractor' | '';
	}
	type Employees = Employee[];

	type SelectOption = {
		label: string;
		value: string | number;
	};

	type BuildingObject = {
		id?: string;
		title: string;
		created_at: number;
	};

	type BuildingObjects = BuildingObject[];
}

export {};
