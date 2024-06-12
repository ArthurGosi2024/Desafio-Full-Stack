export interface INotifyProps {
	open?: boolean;
	icon?:
		| "flat-color-icons:accept-database"
		| "flat-color-icons:delete-database"
		| "tdesign:error";
	message?: string;
}

export interface INotifyContextProps {
	notify: INotifyProps;
	setNotify: (notify: INotifyProps) => void;
}
