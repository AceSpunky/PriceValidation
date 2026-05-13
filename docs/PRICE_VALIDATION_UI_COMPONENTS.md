# Price Validation – UI Component Reference

## Contents

- [Navigation](#navigation)
- [Blocked Orders](#blocked-orders)

---

## Navigation

The application shell is built with the `sap.tnt` library and lives in the main `App` view, wrapping all section views.

### ToolPage
The root layout container. Manages the side navigation panel and the main content area. Starts collapsed (`sideExpanded="false"`); the hamburger menu button toggles the expanded state at runtime.

### ToolHeader
The top application bar. Contains the hamburger menu `Button` that toggles the sidebar and the application `Title` ("Price Validation").

### SideNavigation
The collapsible left-hand navigation rail. Fires an `itemSelect` event when the user picks a destination, triggering a router navigation to the corresponding view.

### NavigationList + NavigationListItem
The list of destinations rendered inside the `SideNavigation`. Each `NavigationListItem` carries a label, an icon, and a key used to resolve the router target.

| Item | Key | State |
|---|---|---|
| Blocked Orders | `BlockedOrders` | Enabled (default) |
| Cleared Orders | `ClearedOrders` | Disabled |
| KAM Teams Push | `KAMTeamsPush` | Disabled |
| Price Data Admin | `PriceDataAdmin` | Disabled |

### NavContainer
The content area of the `ToolPage`. Acts as the routing target — the router swaps views in and out of this container as the user navigates.

---

## Blocked Orders

### OverflowToolbar _(search bar)_
Sits at the top of the page. Contains a live-count `Title` **Blocked Sales Orders (n)** using expression binding on the orders array length, a `SearchField` (30 rem wide) that filters by order ID, customer name, or customer number, and a **Refresh** ghost `Button`.

### MessageStrip
Immediately below the search bar. Displays the summary subtitle (e.g. "6 orders — pending price acceptance") as a `Warning`-type strip with an icon, giving the user an at-a-glance status before they interact with any order.

### GridList + GridBasicLayout _(orders list)_
Bound to `orders>/orders`. Uses a single-column `GridBasicLayout` (`gridTemplateColumns="1fr"`) so each order panel stacks vertically and spans the full available width.

#### GridListItem
One item per blocked sales order. Type `Inactive` — the Panel inside handles its own interaction.

#### Panel _(expandable, per sales order)_
Each blocked sales order lives in a collapsible panel. The first sales order is expanded by default (`expanded="{orders>expanded}"`); all others start collapsed.

#### OverflowToolbar _(panel header)_
Hosts the Sales Order Number `ObjectStatus` (state `Information`, large styling) on the left, and two bulk-action buttons on the right — **All KAM** (type `Accept`) and **All SAP** — allowing the user to accept prices for all line items in the order in one action.

#### HBox _(order details)_
Wrapping `HBox` with `justifyContent="SpaceBetween"` that presents five header-level order fields as side-by-side `VBox` columns. Each column contains a bold `Label` and an `ObjectStatus` value below it.

| Field | Binding |
|---|---|
| Sold to Customer | `orders>customerId` |
| Customer Name | `orders>customer` |
| Order Creation Date | `orders>creationDate` |
| Pricing Date | `orders>pricingDate` |
| Req. Delivery Date | `orders>reqDeliveryDate` |

#### OverflowToolbar _(line items title bar)_
Separates the order header from the items table. Contains a `Title` (H4) with a live item count: **LINE ITEMS (n)**, bound via expression binding on the pre-calculated `itemsCount` field.

#### Table _(line items)_
Bound to `orders>items`. Uses `fixedLayout="true"` with explicit pixel widths on all 12 columns to prevent content wrapping. Separators on all rows and columns.

| Column | Width | Content |
|---|---|---|
| LINE | 60 px | Item number |
| MATERIAL | 100 px | Material ID |
| MATERIAL DESC | 220 px | Material description |
| QTY | 90 px | Quantity + unit (expression binding) |
| LINE VALUE SAP | 130 px | Line value in EUR (formatted to 2 d.p.) |
| UNIT PRICE SAP | 130 px | Unit price in EUR (formatted to 2 d.p.) |
| CUST. EXPECTED UNIT PRICE | 160 px | Customer expected unit price in EUR (formatted to 2 d.p.) |
| CUST. EXPECTED VALUE / ITEM | 160 px | Customer expected value per item in EUR (formatted to 2 d.p.) |
| DIFFERENCE | 110 px | Price gap rendered as `ObjectStatus` with `state="Error"` (formatted to 2 d.p.) |
| KAM COMMENTS | 160 px | Comment text (hidden when empty) above an Add/Edit Comment `Button` |
| STATUS | 130 px | `Select` dropdown for the line item status |
| KAM ACTION | 150 px | `Select` dropdown for the KAM price decision |

##### ColumnListItem cells — notable controls

**Quantity cell**
Expression binding concatenates the numeric quantity and its unit (`{= ${orders>qty} + ' ' + ${orders>unit}}`).

**EUR cells (Line Value SAP, Unit Price SAP, Cust. Expected Unit Price, Cust. Expected Value / Item, Difference)**
All five use complex binding syntax with `formatter: '.formatEur'` to ensure values always display with exactly two decimal places. Cells with no applicable value for a given row are left blank.

**Difference cell**
Rendered as an `ObjectStatus` with `state="Error"` to apply red semantic colouring, making price gaps visually prominent across all rows.

**KAM Comments cell**
A `VBox` containing:
- A `Text` element showing the saved comment (hidden via `visible="{= !!${orders>comment}}"` when no comment exists)
- A `Button` whose label toggles between **Add Comment** and **Edit Comment** depending on whether a comment is already saved. Fires `.onAddComment` to open the comment dialog.

**Status cell**
A `Select` dropdown defaulting to `pending`.

| Key | Label |
|---|---|
| `pending` | Pending |
| `approved` | Approved |
| `rejected` | Rejected |
| `on_hold` | On Hold |
| `escalated` | Escalated |

**KAM Action cell**
A `Select` dropdown for the price decision.

| Key | Label |
|---|---|
| `acceptSap` | Correct SAP Price |
| `rejectSap` | Incorrect SAP Price |
| `acceptCustExpected` | Accept Customer Expected Price |

---

## Fragment: CommentDialog

A draggable `Dialog` (400 px wide) opened lazily on first use by `.onAddComment`. The dialog title binds to `{comment>/title}` and reads either "Add Comment — Item # n" or "Edit Comment — Item # n" depending on whether a comment already exists for the row.

| Element | Control | Detail |
|---|---|---|
| Item label | `Label` (Bold) | Bound to `{comment>/itemLabel}` — shows material description and material ID |
| Comment input | `TextArea` | 5 rows, growing enabled, bound to `{comment>/text}` |

Footer buttons: **Save** (emphasized, fires `.onCommentSave`) / **Cancel** (fires `.onCommentCancel`).

`.onCommentSave` writes the trimmed text back to the bound path in the `orders` model and closes the dialog. `.onCommentCancel` closes the dialog without saving.
