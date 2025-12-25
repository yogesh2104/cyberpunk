// import { useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { useAuthStore } from "@/store/auth.store";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion"
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
// import { cn } from "@/lib/utils";

// export default function Login() {
//     const emailRef = useRef();
//     const passwordRef = useRef();
//     const { setUser, setToken } = useAuthStore();
//     const [errors, setErrors] = useState(null);
//     const [loading, setLoading] = useState(false);

//     const onSubmit = (ev) => {
//         ev.preventDefault();
//         setLoading(true);
//         setErrors(null);

//         const payload = {
//             email: emailRef.current.value,
//             password: passwordRef.current.value,
//         };

//         // Mock API call simulation
//         setTimeout(() => {
//             if (payload.email && payload.password) {
//                 // Successful login
//                 setUser({ name: "Demo User", email: payload.email });
//                 setToken("demo-token-123");
//             } else {
//                 setErrors({ email: ["Invalid credentials provided."] });
//             }
//             setLoading(false);
//         }, 1000);
//     };

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
//             <motion.div className={cn("cursor-pointer transition-all duration-300 group")} >
//                 {/* Main Card Container */}
//                 <div className={cn("relative bg-slate-950/95 transition-all duration-300")}>
//                     {/* Scanline overlay */}
//                     <div className="pointer-events-none absolute inset-0 z-20 opacity-[0.03] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,255,0.1)_2px,rgba(0,255,255,0.1)_4px)]" />

//                     {/* Top-left */}
//                     <div className={cn("absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 transition-colors", "border-cyan-400/40")} />
//                     <div className={cn("absolute top-0 left-4 w-3 h-0.5 transition-colors", "bg-cyan-400/40")} />
//                     <div className={cn("absolute top-4 left-0 w-0.5 h-3 transition-colors", "bg-cyan-400/40")} />

//                     {/* Top-right */}
//                     <div className={cn("absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 transition-colors", "border-cyan-400/40")} />
//                     <div className={cn("absolute top-0 right-4 w-3 h-0.5 transition-colors", "bg-cyan-400/40")} />
//                     <div className={cn("absolute top-4 right-0 w-0.5 h-3 transition-colors", "bg-cyan-400/40")} />

//                     {/* Bottom-left */}
//                     <div className={cn("absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 transition-colors", "border-cyan-400/40")} />
//                     <div className={cn("absolute bottom-0 left-4 w-3 h-0.5 transition-colors", "bg-cyan-400/40")} />
//                     <div className={cn("absolute bottom-4 left-0 w-0.5 h-3 transition-colors", "bg-cyan-400/40")} />

//                     {/* Bottom-right */}
//                     <div className={cn("absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 transition-colors", "border-cyan-400/40")} />
//                     <div className={cn("absolute bottom-0 right-4 w-3 h-0.5 transition-colors", "bg-cyan-400/40")} />
//                     <div className={cn("absolute bottom-4 right-0 w-0.5 h-3 transition-colors", "bg-cyan-400/40")} />

//                     {/* Main border */}
//                     <div className={cn("absolute inset-0 border transition-colors border-cyan-400/20")} />

//                     {/* Content */}
//                     <div className="relative z-10 p-4">
//                         <p className="text-2xl font-bold text-center">Login</p>
//                         <span className="text-center">
//                             Enter your email below to login to your account
//                         </span>
//                         <div className="w-full max-w-sm shadow-lg">
                       
//                             <form onSubmit={onSubmit}>
//                                 <div className="grid gap-4">
//                                     {errors && (
//                                         <div className="bg-red-500 text-white p-3 rounded text-sm mb-2">
//                                             {Object.keys(errors).map((key) => (
//                                                 <p key={key}>{errors[key][0]}</p>
//                                             ))}
//                                         </div>
//                                     )}
//                                     <div className="grid gap-2">
//                                         <Label htmlFor="email">Email</Label>
//                                         <Input
//                                             id="email"
//                                             type="email"
//                                             placeholder="m@example.com"
//                                             ref={emailRef}
//                                             required
//                                         />
//                                     </div>
//                                     <div className="grid gap-2">
//                                         <Label htmlFor="password">Password</Label>
//                                         <Input
//                                             id="password"
//                                             type="password"
//                                             ref={passwordRef}
//                                             required
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="flex flex-col gap-4">
//                                     <Button className="w-full" type="submit" disabled={loading}>
//                                         {loading ? "Logging in..." : "Login"}
//                                     </Button>
//                                     <div className="text-center text-sm">
//                                         Don't have an account?{" "}
//                                         <Link to="/signup" className="underline text-primary hover:text-primary/90">
//                                             Sign up
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>

//                     {/* Bottom accent line */}
//                     <div className={cn(
//                         "absolute bottom-0 left-4 right-4 h-0.5 transition-colors",
//                         "bg-cyan-400/30"
//                     )} />
//                 </div>
//             </motion.div>
//         </div>
//     );
// }



import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import { useAuthStore } from "@/store/auth.store"

export default function CyberpunkLogin() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { setUser, setToken } = useAuthStore();
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);
    const [focusedField, setFocusedField] = useState(null)
    
    const onSubmit = (ev) => {
        ev.preventDefault();
        setLoading(true);
        setErrors(null);

        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

        // Mock API call simulation
        setTimeout(() => {
            if (payload.email && payload.password) {
                // Successful login
                setUser({ name: "Demo User", email: payload.email });
                setToken("demo-token-123");
            } else {
                setErrors({ email: ["Invalid credentials provided."] });
            }
            setLoading(false);
        }, 1000);
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, staggerChildren: 0.1 },
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
                <div className="absolute -inset-0.5 bg-linear-to-r from-cyan-500 via-magenta-500 to-cyan-500 rounded-lg opacity-0  blur transition duration-500" />

                <div className="relative bg-slate-950/95 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-8">
                    <div className="absolute inset-0 pointer-events-none rounded-lg opacity-[0.02] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,255,0.1)_2px,rgba(0,255,255,0.1)_4px)]" />

                    <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400 rounded-tl-sm" />
                    <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-magenta-400 rounded-tr-sm" />
                    <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-magenta-400 rounded-bl-sm" />
                    <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-400 rounded-br-sm" />

                    <div className="relative z-10 space-y-6">
                    <motion.div variants={itemVariants} className="space-y-2 text-center">
                        <h1 className="text-4xl font-bold bg-linear-to-r from-cyan-400 via-blue-400 to-magenta-400 bg-clip-text text-transparent uppercase tracking-wider">
                        [ACCESS GRANTED]
                        </h1>
                        <p className="text-sm text-cyan-300/80 font-mono tracking-widest">&gt; ENTER CREDENTIALS</p>
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
                                <>▶ INITIATE ACCESS</>
                            )}
                            </span>
                        </Button>
                        </motion.div>
                    </form>

                    <motion.div variants={itemVariants} className="text-center text-xs text-cyan-300/60 font-mono space-y-2">
                        <p>NO ACCOUNT?</p>
                        <Link
                        to="/signup"
                        className="inline-block text-magenta-400 hover:text-magenta-300 hover:shadow-lg hover:shadow-magenta-500/50 transition-all duration-200 font-bold underline decoration-magenta-500/50"
                        >
                        &gt; CREATE NEW ACCESS
                        </Link>
                    </motion.div>
                    </div>
                </div>
                </div>
            </motion.div>
        </div>
    )
}