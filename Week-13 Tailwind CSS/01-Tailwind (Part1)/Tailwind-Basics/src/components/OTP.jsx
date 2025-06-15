import { useRef, useState, useEffect } from "react";

export function OTP({ number }) {
    const inputRefs = useRef([]);
    const [values, setValues] = useState(Array(number).fill(""));

    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        setDisabled(values.includes(""));
    }, [values]);

    const handleChange = (val, index) => {
        const updatedValues = [...values];
        updatedValues[index] = val;
        setValues(updatedValues);

        if (val && index < number - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleBackspace = (index) => {
        const updatedValues = [...values];
        updatedValues[index] = "";
        setValues(updatedValues);

        if (index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <div className="flex flex-col items-center mt-10">
            <div className="flex">
                {Array(number)
                    .fill(1)
                    .map((_, index) => (
                        <SubOtpBox
                            key={index}
                            value={values[index]}
                            reference={(el) => (inputRefs.current[index] = el)}
                            onChange={(val) => handleChange(val, index)}
                            onBackspace={() => handleBackspace(index)}
                        />
                    ))}
            </div>
            <button
                disabled={disabled}
                className={`mt-6 px-4 py-2 rounded-md ${disabled ? "bg-gray-400" : "bg-green-600 text-white"
                    }`}
            >
                Sign Up
            </button>
        </div>
    );
}

function SubOtpBox({ reference, onChange, onBackspace, value }) {
    return (
        <input
            ref={reference}
            value={value}
            maxLength={1}
            onChange={(e) => {
                const val = e.target.value;
                if (/^\d$/.test(val)) {
                    onChange(val);
                }
            }}
            onKeyUp={(e) => {
                if (e.key === "Backspace") {
                    onBackspace();
                }
            }}
            type="text"
            className="m-1 w-[40px] h-[50px] rounded-xl bg-blue-500 outline-none text-center text-white text-xl"
        />
    );
}
