import { forwardRef } from "react";

const AuthInput = forwardRef(
  (
    {
      icon: Icon,
      iconPosition = "left",
      label,
      className = "",
      rightAction,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-semibold mb-2.5 text-stone-200">
            {label}
          </label>
        )}
        <div className="relative">
          {Icon && iconPosition === "left" && (
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Icon className="text-stone-500" size={20} />
            </div>
          )}

          <input
            ref={ref}
            className={`w-full bg-[#0F0D0C] border border-[#2E2A28] focus:border-[#C2611F] outline-none rounded-xl py-3.5 text-white placeholder-stone-600 transition-all font-medium text-base
                        ${Icon && iconPosition === "left" ? "pl-12 pr-4" : ""}
                        ${Icon && iconPosition === "right" ? "pr-12 pl-4" : ""}
                        ${!Icon ? "px-4" : ""}
                        ${className}
                    `}
            {...props}
          />

          {Icon && iconPosition === "right" && !rightAction && (
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <Icon className="text-stone-500" size={20} />
            </div>
          )}

          {rightAction && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              {rightAction}
            </div>
          )}
        </div>
      </div>
    );
  },
);

AuthInput.displayName = "AuthInput";

export default AuthInput;
