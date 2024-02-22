import React, { useState, useEffect, useRef } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Dialog, DialogContent, DialogTrigger, DialogClose } from '../components/ui/dialog';
import IDsCard from '../pages/Cards/IDsCard';
import { Button } from './../components/ui/button';

const DialogHover = () => {
    const [offset, setOffset] = useState<number | null>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const [activeDialog, setActiveDialog] = useState<string | null>(null);
    const [activeTrigger, setActiveTrigger] = useState<HTMLElement | null>(null);

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
    );
};

export default DialogHover;
