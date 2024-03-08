import React, { useState, useEffect, useRef } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Dialog, DialogContent, DialogTrigger, DialogClose } from '../components/ui/dialog';
import IDsCard from '../pages/Cards/IDsCard';
import { Button } from './../components/ui/button';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { 
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "../components/ui/form"
  import { Input } from "../components/ui/input"
  import { Checkbox } from "../components/ui/checkbox"
  import { Calendar } from "../components/ui/calendar"
  import { Switch } from "../components/ui/switch"
  import { Label } from "../components/ui/label"

  const formSchema = z.object({
    drosAudit: z.boolean().default(true),
    drosCancel: z.boolean().default(false),
    username: z.string().min(2),
  })

const DialogHover = () => {
    const [offset, setOffset] = useState<number | null>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const [activeDialog, setActiveDialog] = useState<string | null>(null);
    const [activeTrigger, setActiveTrigger] = useState<HTMLElement | null>(null);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          drosAudit: true,
          drosCancel: false,
          username: "",
        },
      })
      const handleSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
      }

    // Handle dialog open/close
    const handleOpenDialog = (dialogId: string) => setActiveDialog(dialogId);
    const handleCloseDialog = () => setActiveDialog(null);

    useEffect(() => {
        if (activeTrigger && listRef.current) {
            const listWidth = listRef.current.offsetWidth;
            const listCenter = listWidth / 2;
            const triggerOffsetRight = listWidth - activeTrigger.offsetLeft - (activeTrigger.offsetWidth / 2);
            setOffset(Math.round(listCenter - triggerOffsetRight));
        } else {
            setOffset(null);
        }
    }, [activeTrigger]);

    return (
        <main>
        <header>
        <Dialog>
            <NavigationMenu.Root style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                <NavigationMenu.List ref={listRef} style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger className="submenu-trigger" onMouseEnter={() => setActiveTrigger(null)}>Forms Of ID Guide</NavigationMenu.Trigger>
                        <NavigationMenu.Content>
                            {/* Hover content or tooltip should be managed here */}
                            <p>Hover content shows up here.</p>
                            <DialogTrigger asChild>
                                <button onClick={() => handleOpenDialog('stateIdVerification')} className="navigationMenuTriggerStyle">
                                    State ID Verification
                                </button>
                            </DialogTrigger>
                            {activeDialog === 'stateIdVerification' && (
                                <DialogContent>
                                    <IDsCard />
                                    <DialogClose asChild>
                                        <Button onClick={handleCloseDialog}>Close</Button>
                                    </DialogClose>
                                </DialogContent>
                            )}
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>
                    {/* Additional NavigationMenu.Item components */}
                    <NavigationMenu.Indicator
                        style={{
                            bottom: 0,
                            height: 5,
                            backgroundColor: 'grey',
                            transition: 'all 0.5s ease',
                        }}
                    />
                </NavigationMenu.List>

                <div
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: '100%',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <NavigationMenu.Viewport
                        style={{
                            display: !offset ? 'none' : undefined,
                            transform: `translateX(${offset}px)`,
                            top: '100%',
                            width: 'var(--radix-navigation-menu-viewport-width)',
                            transition: 'all 0.5s ease',
                        }}
                    />
                </div>
            </NavigationMenu.Root>
        </Dialog>
        </header>
        
        <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col justify-center mx-auto p-4 space-y-8 max-w-md">
      <FormField
              control={form.control}
              name="drosAudit"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      DROS Or Consignment Audits
                    </FormLabel>
                    <FormDescription>
                      Select Your Audit
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      id="drosAudit"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
      <FormField
          control={form.control}
          name="drosCancel"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4">
              <FormControl>
                <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
              <FormLabel>Cancelled DROS</FormLabel>
              <FormDescription>
                Select When DROS Was Cancelled
              </FormDescription>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="kozyguns" 
                type="username"
                {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
        </main>
    );
};

export default DialogHover;
