// import { useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { useAuthStore } from "@/store/auth.store";
// import { Button } from "@/components/ui/button";
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// export default function Signup() {
//     const nameRef = useRef();
//     const emailRef = useRef();
//     const passwordRef = useRef();
//     const passwordConfirmationRef = useRef();
//     const { setUser, setToken } = useAuthStore();
//     const [errors, setErrors] = useState(null);
//     const [loading, setLoading] = useState(false);

//     const onSubmit = (ev) => {
//         ev.preventDefault();
//         setLoading(true);
//         setErrors(null);

//         const payload = {
//             name: nameRef.current.value,
//             email: emailRef.current.value,
//             password: passwordRef.current.value,
//             password_confirmation: passwordConfirmationRef.current.value,
//         };

//         if (payload.password !== payload.password_confirmation) {
//             setErrors({ password: ["Passwords do not match"] });
//             setLoading(false);
//             return;
//         }

//         // Mock API call simulation
//         setTimeout(() => {
//             if (payload.email && payload.password) {
//                 // Successful signup
//                 setUser({ name: payload.name, email: payload.email });
//                 setToken("demo-token-123");
//             } else {
//                 setErrors({ email: ["Email already exists."] });
//             }
//             setLoading(false);
//         }, 1000);
//     };

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
//             <Card className="w-full max-w-sm shadow-lg">
//                 <CardHeader>
//                     <CardTitle className="text-2xl font-bold text-center">Sign Up</CardTitle>
//                     <CardDescription className="text-center">
//                         Create an account to get started
//                     </CardDescription>
//                 </CardHeader>
//                 <form onSubmit={onSubmit}>
//                     <CardContent className="grid gap-4">
//                         {errors && (
//                             <div className="bg-red-500 text-white p-3 rounded text-sm mb-2">
//                                 {Object.keys(errors).map((key) => (
//                                     <p key={key}>{errors[key][0]}</p>
//                                 ))}
//                             </div>
//                         )}
//                         <div className="grid gap-2">
//                             <Label htmlFor="name">Full Name</Label>
//                             <Input
//                                 id="name"
//                                 type="text"
//                                 placeholder="John Doe"
//                                 ref={nameRef}
//                                 required
//                             />
//                         </div>
//                         <div className="grid gap-2">
//                             <Label htmlFor="email">Email</Label>
//                             <Input
//                                 id="email"
//                                 type="email"
//                                 placeholder="m@example.com"
//                                 ref={emailRef}
//                                 required
//                             />
//                         </div>
//                         <div className="grid gap-2">
//                             <Label htmlFor="password">Password</Label>
//                             <Input
//                                 id="password"
//                                 type="password"
//                                 ref={passwordRef}
//                                 required
//                             />
//                         </div>
//                         <div className="grid gap-2">
//                             <Label htmlFor="passwordConfirmation">Confirm Password</Label>
//                             <Input
//                                 id="passwordConfirmation"
//                                 type="password"
//                                 ref={passwordConfirmationRef}
//                                 required
//                             />
//                         </div>
//                     </CardContent>
//                     <CardFooter className="flex flex-col gap-4">
//                         <Button className="w-full" type="submit" disabled={loading}>
//                             {loading ? "Creating account..." : "Sign Up"}
//                         </Button>
//                         <div className="text-center text-sm">
//                             Already have an account?{" "}
//                             <Link to="/login" className="underline text-primary hover:text-primary/90">
//                                 Login
//                             </Link>
//                         </div>
//                     </CardFooter>
//                 </form>
//             </Card>
//         </div>
//     );
// }


import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { useAuthStore } from "@/store/auth.store"

export default function CyberpunkSignup() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    const { setUser, setToken } = useAuthStore();
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);
    const [focusedField, setFocusedField] = useState(null)

    const onSubmit = (ev) => {
        ev.preventDefault();
        setLoading(true);
        setErrors(null);

        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        };

        if (payload.password !== payload.password_confirmation) {
            setErrors({ password: ["Passwords do not match"] });
            setLoading(false);
            return;
        }

        // Mock API call simulation
        setTimeout(() => {
            if (payload.email && payload.password) {
                // Successful signup
                setUser({ name: payload.name, email: payload.email });
                setToken("demo-token-123");
            } else {
                setErrors({ email: ["Email already exists."] });
            }
            setLoading(false);
        }, 1000);
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, staggerChildren: 0.08 },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-950 p-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-linear-to-br from-cyan-950/20 via-slate-950 to-magenta-950/20 pointer-events-none" />

        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(0,255,255,0.05)_25%,rgba(0,255,255,0.05)_26%,transparent_27%,transparent_74%,rgba(0,255,255,0.05)_75%,rgba(0,255,255,0.05)_76%,transparent_77%,transparent)] bg-size[50px_50px]" />
        </div>

        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-md relative z-10"
        >
            <div className="relative group">
            <div className="absolute -inset-0.5 bg-linear-to-r from-cyan-500 via-magenta-500 to-cyan-500 rounded-lg opacity-0 blur transition duration-500 " />

            <div className="relative bg-slate-950/95 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-8 shadow-2xl">
                <div className="absolute inset-0 pointer-events-none rounded-lg opacity-[0.02] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,255,0.1)_2px,rgba(0,255,255,0.1)_4px)]" />

                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400 rounded-tl-sm" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-magenta-400 rounded-tr-sm" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-magenta-400 rounded-bl-sm" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-400 rounded-br-sm" />

                <div className="relative z-10 space-y-6">
                <motion.div variants={itemVariants} className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold bg-linear-to-r from-cyan-400 via-blue-400 to-magenta-400 bg-clip-text text-transparent uppercase tracking-wider">
                    [INIT ACCOUNT]
                    </h1>
                    <p className="text-sm text-cyan-300/80 font-mono tracking-widest">&gt; ESTABLISH CREDENTIALS</p>
                </motion.div>

                {errors && (
                    <motion.div
                    variants={itemVariants}
                    className="bg-red-950/60 border border-red-500/50 text-red-200 p-3 rounded text-sm font-mono space-y-1"
                    >
                    {Object.keys(errors).map((key) => (
                        <p key={key}>❌ {errors[key][0]}</p>
                    ))}
                    </motion.div>
                )}

                <form onSubmit={onSubmit} className="space-y-4">
                    <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="name" className="text-cyan-300 text-xs font-mono uppercase tracking-widest">
                        [IDENTIFIER]
                    </Label>
                    <div className="relative group/input">
                        <div
                        className={cn(
                            "absolute -inset-0.5 rounded opacity-0 blur transition-all duration-300",
                            focusedField === "name"
                            ? "opacity-100 bg-linear-to-r from-cyan-500 to-blue-500"
                            : "bg-linear-to-r from-cyan-500/20 to-magenta-500/20",
                        )}
                        />
                        <Input
                        id="name"
                        type="text"
                        placeholder="John Nexus"
                        ref={nameRef}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="relative bg-slate-900/50 border-cyan-500/30 text-cyan-100 placeholder-cyan-700/50 focus:border-cyan-400 focus:ring-0 focus:shadow-lg focus:shadow-cyan-500/50 font-mono text-sm transition-all duration-200"
                        />
                    </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="email" className="text-cyan-300 text-xs font-mono uppercase tracking-widest">
                        [EMAIL]
                    </Label>
                    <div className="relative group/input">
                        <div
                        className={cn(
                            "absolute -inset-0.5 rounded opacity-0 blur transition-all duration-300",
                            focusedField === "email"
                            ? "opacity-100 bg-linear-to-r from-cyan-500 to-blue-500"
                            : "bg-linear-to-r from-cyan-500/20 to-magenta-500/20",
                        )}
                        />
                        <Input
                        id="email"
                        type="email"
                        placeholder="user@network.sys"
                        ref={emailRef}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="relative bg-slate-900/50 border-cyan-500/30 text-cyan-100 placeholder-cyan-700/50 focus:border-cyan-400 focus:ring-0 focus:shadow-lg focus:shadow-cyan-500/50 font-mono text-sm transition-all duration-200"
                        />
                    </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-2">
                    <Label htmlFor="password" className="text-magenta-300 text-xs font-mono uppercase tracking-widest">
                        [PASSWORD]
                    </Label>
                    <div className="relative group/input">
                        <div
                        className={cn(
                            "absolute -inset-0.5 rounded opacity-0 blur transition-all duration-300",
                            focusedField === "password"
                            ? "opacity-100 bg-linear-to-r from-magenta-500 to-pink-500"
                            : "bg-linear-to-r from-magenta-500/20 to-cyan-500/20",
                        )}
                        />
                        <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        ref={passwordRef}
                        onFocus={() => setFocusedField("password")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="relative bg-slate-900/50 border-magenta-500/30 text-magenta-100 placeholder-magenta-700/50 focus:border-magenta-400 focus:ring-0 focus:shadow-lg focus:shadow-magenta-500/50 font-mono text-sm transition-all duration-200"
                        />
                    </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="space-y-2">
                    <Label
                        htmlFor="passwordConfirmation"
                        className="text-magenta-300 text-xs font-mono uppercase tracking-widest"
                    >
                        [CONFIRM PASSWORD]
                    </Label>
                    <div className="relative group/input">
                        <div
                        className={cn(
                            "absolute -inset-0.5 rounded opacity-0 blur transition-all duration-300",
                            focusedField === "passwordConfirmation"
                            ? "opacity-100 bg-linear-to-r from-magenta-500 to-pink-500"
                            : "bg-linear-to-r from-magenta-500/20 to-cyan-500/20",
                        )}
                        />
                        <Input
                        id="passwordConfirmation"
                        type="password"
                        placeholder="••••••••"
                        ref={passwordConfirmationRef}
                        onFocus={() => setFocusedField("passwordConfirmation")}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="relative bg-slate-900/50 border-magenta-500/30 text-magenta-100 placeholder-magenta-700/50 focus:border-magenta-400 focus:ring-0 focus:shadow-lg focus:shadow-magenta-500/50 font-mono text-sm transition-all duration-200"
                        />
                    </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="pt-2">
                    <Button type="submit" disabled={loading} className="w-full relative group/btn overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-r from-cyan-500 via-magenta-500 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                        <span className="relative inline-flex items-center justify-center gap-2 font-mono font-bold uppercase tracking-wider text-sm">
                        {loading ? (
                            <>
                            <span className="inline-block w-4 h-4 border-2 border-cyan-300 border-t-magenta-300 rounded-full animate-spin" />
                            PROCESSING...
                            </>
                        ) : (
                            <>▶ CREATE ACCESS</>
                        )}
                        </span>
                    </Button>
                    </motion.div>
                </form>

                <motion.div variants={itemVariants} className="text-center text-xs text-cyan-300/60 font-mono space-y-2">
                    <p>HAVE CREDENTIALS?</p>
                    <Link
                    to="/login"
                    className="inline-block text-magenta-400 hover:text-magenta-300 hover:shadow-lg hover:shadow-magenta-500/50 transition-all duration-200 font-bold underline decoration-magenta-500/50"
                    >
                    &gt; EXISTING ACCESS
                    </Link>
                </motion.div>
                </div>
            </div>
            </div>
        </motion.div>
        </div>
    )
}
