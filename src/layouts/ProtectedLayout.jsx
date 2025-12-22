import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";

export default function ProtectedLayout() {
    const token = useAuthStore((state) => state.token);
    const notification = useAuthStore((state) => state.notification);

    if (!token) {
        return <Navigate to="/login" />;
    }

    return (
        <div id="defaultLayout">
            <div className="content">
                <main>
                    <Outlet />
                </main>
                {notification && (
                    <div className="notification">
                        {notification}
                    </div>
                )}
            </div>
        </div>
    );
}
