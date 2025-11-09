'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "@tanstack/react-form"


interface IForm {
    name: string;
};

export default function App() {

    const form = useForm({
        defaultValues: {
            name: '',
        } as IForm,
        onSubmit: async ({ value }) => {
            console.log(value);
        },
    });

    console.log('rerendering');

    return (
        <div>
            <form onSubmit={(e) => { e.preventDefault(); form.handleSubmit(); }}>
                <form.Field name="name" validators={{
                    onChange: ({ value }) => (
                        value.trim().length < 4 ? '4 harfdan koproq bolishi kerak' : undefined
                    )
                }}>
                    {(field) => (
                        <div>
                            <label>
                                name
                                <Input value={field.state.value} onChange={e => field.handleChange(e.target.value)} type="text" />
                            </label>
                            {field.state.meta.errors &&
                                field.state.meta.errors.length > 0 && (
                                    <p className="text-red-500 text-sm">
                                        {field.state.meta.errors[0]}
                                    </p>
                                )}
                        </div>
                    )}
                </form.Field>

                <Button type="submit">submit</Button>
            </form>
        </div>
    )
}  