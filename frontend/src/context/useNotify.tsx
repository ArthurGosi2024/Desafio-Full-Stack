import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";
import { INotifyContextProps, INotifyProps } from "../@types/iNotify";

const Notify = createContext<INotifyContextProps>({
	notify: {},
	setNotify: () => {},
});

interface NotifyProps {
	children: ReactNode;
}

export default function NotifyProvider({ children }: NotifyProps) {
	const [notify, setNotify] = useState<INotifyProps>({});

	useEffect(() => {

		console.log(notify.open);
		
		if (notify.open) {
			setTimeout(() => {
				setNotify({ open: false, message: "" });
			}, 3000);
		}
	}, [notify.open]);
	return (
		<Notify.Provider value={{ notify, setNotify }}>{children}</Notify.Provider>
	);
}

export const useNotify = () => {
	const { ...props } = useContext(Notify);

	return { ...props };
};
