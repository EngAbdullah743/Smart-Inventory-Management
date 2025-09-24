import * as React from "react";

export interface TabsProps { defaultValue?: string; className?: string; children: React.ReactNode; }

export const Tabs: React.FC<TabsProps> = ({ defaultValue, className, children }) => { const [value, setValue] = React.useState(defaultValue || ""); return ( <div className={className}> {React.Children.map(children, (child) => React.isValidElement(child) ? React.cloneElement(child, { value, setValue }) : child )} </div> ); };

export const TabsList: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => ( <div className={className}>{children}</div> );

export const TabsTrigger: React.FC<{ value: string; children: React.ReactNode }> = ({ value, children }) => ( <button type="button">{children}</button> );

export const TabsContent: React.FC<{ value: string; className?: string; children: React.ReactNode }> = ({ value, className, children }) => ( <div className={className}>{children}</div> );
