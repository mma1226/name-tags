/* @ds-bundle: {"format":3,"namespace":"ModalDesignSystem_43bc1a","components":[],"sourceHashes":{"ui_kits/app/App.jsx":"944962eb6184","ui_kits/app/AppDetail.jsx":"db899f157611","ui_kits/app/AppsTable.jsx":"403fd1316376","ui_kits/app/Drawer.jsx":"7286ba41e84e","ui_kits/app/data.js":"1eb9cd0bd251","ui_kits/app/primitives.jsx":"d761e40a75a0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ModalDesignSystem_43bc1a = window.ModalDesignSystem_43bc1a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/app/App.jsx
try { (() => {
// Top navigation + app shell
const {
  useState: useStateSh
} = React;
function TopNav({
  workspace,
  activeTab,
  onTabChange,
  onOpenSwitcher,
  switcherOpen,
  onSignOut
}) {
  const tabs = ["Apps", "Functions", "Secrets", "Volumes", "Dashboards", "Settings"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 60,
      background: "rgb(24,24,24)",
      borderBottom: "1px solid rgb(39,39,39)",
      display: "flex",
      alignItems: "center",
      padding: "0 20px",
      gap: 20,
      position: "relative",
      zIndex: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources && window.__resources.modalLogo || "../../assets/Modal-Logo-Only.svg",
    style: {
      height: 22
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(93,93,93)",
      fontSize: 14
    }
  }, "/"), /*#__PURE__*/React.createElement("button", {
    onClick: onOpenSwitcher,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      background: switcherOpen ? "rgba(255,255,255,0.06)" : "transparent",
      border: 0,
      padding: "4px 8px",
      borderRadius: 6,
      cursor: "pointer",
      color: "rgb(232,232,232)",
      fontFamily: "Inter",
      fontSize: 14,
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: 4,
      background: workspace.color
    }
  }), workspace.name, /*#__PURE__*/React.createElement(Icon, {
    name: "chevrons-up-down",
    size: 12,
    style: {
      color: "rgb(139,139,139)"
    }
  })), switcherOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 42,
      left: 30
    }
  }, /*#__PURE__*/React.createElement(Menu, {
    header: "Switch workspace",
    items: [{
      icon: null,
      label: "modal-labs",
      active: true,
      right: /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 14,
        style: {
          color: "rgb(127,238,100)"
        }
      })
    }, {
      label: "research"
    }, {
      label: "playground"
    }, "-", {
      icon: "plus",
      label: "Create workspace"
    }, {
      icon: "settings",
      label: "Workspace settings"
    }],
    onSelect: onOpenSwitcher
  }))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 2,
      marginLeft: 12
    }
  }, tabs.map(t => {
    const active = t === activeTab;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => onTabChange(t),
      style: {
        padding: "6px 10px",
        borderRadius: 6,
        border: 0,
        cursor: "pointer",
        background: active ? "rgb(39,39,39)" : "transparent",
        color: active ? "rgb(232,232,232)" : "rgb(163,163,163)",
        fontFamily: "Inter",
        fontWeight: 500,
        fontSize: 13,
        transition: "background 150ms ease"
      },
      onMouseEnter: e => !active && (e.currentTarget.style.background = "rgba(255,255,255,0.04)"),
      onMouseLeave: e => !active && (e.currentTarget.style.background = "transparent")
    }, t);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Search or filter",
    kbd: "\u2318K",
    style: {
      width: 260
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "book",
    title: "Docs"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    title: "Notifications"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 24,
      background: "rgb(39,39,39)",
      margin: "0 4px"
    }
  }), /*#__PURE__*/React.createElement(Avatar, {
    initials: "ER",
    color: "rgb(127,238,100)",
    size: 28
  })));
}
function PageHeader({
  breadcrumb,
  title,
  status,
  chips,
  actions,
  tabs,
  activeTab,
  onTabChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 24px 0",
      background: "rgb(24,24,24)",
      borderBottom: "1px solid rgb(39,39,39)"
    }
  }, breadcrumb && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      color: "rgb(139,139,139)",
      fontSize: 13,
      marginBottom: 10
    }
  }, breadcrumb.map((b, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: i === breadcrumb.length - 1 ? "rgb(232,232,232)" : "rgb(139,139,139)",
      cursor: b.onClick ? "pointer" : "default"
    },
    onClick: b.onClick
  }, b.label), i < breadcrumb.length - 1 && /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 12
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: tabs ? 18 : 20
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "500 24px Inter",
      color: "rgb(255,255,255)",
      margin: 0,
      letterSpacing: "-0.01em"
    }
  }, title), status, chips && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, chips), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 8
    }
  }, actions)), tabs && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 0,
      marginTop: 4
    }
  }, tabs.map(t => {
    const active = t === activeTab;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => onTabChange(t),
      style: {
        padding: "10px 14px",
        border: 0,
        background: "transparent",
        cursor: "pointer",
        font: "500 13px Inter",
        color: active ? "rgb(255,255,255)" : "rgb(139,139,139)",
        borderBottom: "2px solid " + (active ? "rgb(127,238,100)" : "transparent"),
        marginBottom: -1
      }
    }, t);
  })));
}
Object.assign(window, {
  TopNav,
  PageHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/AppDetail.jsx
try { (() => {
// App detail view — sub-tabs, logs, metrics, containers
function AppDetail({
  app,
  onBack,
  onOpenContainer
}) {
  const [subTab, setSubTab] = useState("Logs");
  const tabs = ["Overview", "Logs", "Metrics", "Containers", "Environment", "Settings"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgb(24,24,24)",
      minHeight: "100%"
    }
  }, /*#__PURE__*/React.createElement(PageHeader, {
    breadcrumb: [{
      label: "modal-labs"
    }, {
      label: "Apps",
      onClick: onBack
    }, {
      label: app.name
    }],
    title: app.name,
    status: /*#__PURE__*/React.createElement(Chip, {
      variant: app.status,
      dot: true
    }, app.statusLabel),
    chips: [/*#__PURE__*/React.createElement(Chip, {
      key: "env",
      icon: "git-branch"
    }, app.env), /*#__PURE__*/React.createElement(Chip, {
      key: "region",
      icon: "globe"
    }, app.region), /*#__PURE__*/React.createElement(Chip, {
      key: "containers",
      icon: "package"
    }, app.containers, " containers")],
    actions: [/*#__PURE__*/React.createElement(Button, {
      key: "stop",
      variant: "outline",
      icon: "square"
    }, "Stop"), /*#__PURE__*/React.createElement(Button, {
      key: "redeploy",
      variant: "outline",
      icon: "refresh-cw"
    }, "Redeploy"), /*#__PURE__*/React.createElement(Button, {
      key: "view",
      variant: "accent",
      icon: "external-link"
    }, "View live")],
    tabs: tabs,
    activeTab: subTab,
    onTabChange: setSubTab
  }), subTab === "Logs" && /*#__PURE__*/React.createElement(LogsView, {
    onOpenContainer: onOpenContainer
  }), subTab === "Overview" && /*#__PURE__*/React.createElement(OverviewView, {
    app: app
  }), subTab === "Metrics" && /*#__PURE__*/React.createElement(MetricsView, null), subTab === "Containers" && /*#__PURE__*/React.createElement(ContainersView, {
    onOpenContainer: onOpenContainer
  }), (subTab === "Environment" || subTab === "Settings") && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 80,
      textAlign: "center",
      color: "rgb(93,93,93)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "construction",
    size: 32,
    style: {
      color: "rgb(70,70,70)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontSize: 14
    }
  }, subTab, " \u2014 not in this prototype")));
}

// -------- LOGS
function LogsView({
  onOpenContainer
}) {
  const [filter, setFilter] = useState("");
  const [level, setLevel] = useState("ALL");
  const levels = ["ALL", "INFO", "REQ", "WARN", "ERROR"];
  const color = {
    INFO: "rgb(145,200,239)",
    REQ: "rgb(127,238,100)",
    WARN: "rgb(255,171,94)",
    ERROR: "rgb(248,113,113)"
  };
  const visible = window.LOGS.filter(l => (level === "ALL" || l.lvl === level) && (!filter || l.msg.includes(filter)));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 24px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Filter logs",
    value: filter,
    onChange: e => setFilter(e.target.value),
    style: {
      width: 260
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      background: "rgb(24,24,24)",
      border: "1px solid rgb(39,39,39)",
      borderRadius: 8,
      padding: 3,
      gap: 2
    }
  }, levels.map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => setLevel(l),
    style: {
      padding: "4px 10px",
      border: 0,
      cursor: "pointer",
      background: level === l ? "rgb(47,47,47)" : "transparent",
      color: level === l ? "rgb(232,232,232)" : "rgb(139,139,139)",
      fontFamily: "Inter",
      fontSize: 12,
      fontWeight: 500,
      borderRadius: 5
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontSize: 12,
      color: "rgb(139,139,139)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "rgb(127,238,100)",
      boxShadow: "0 0 6px rgba(127,238,100,0.5)"
    }
  }), "Live tail"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: "download"
  }, "Export"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgb(20,20,20)",
      border: "1px solid rgb(39,39,39)",
      borderRadius: 8,
      maxHeight: 500,
      overflow: "auto",
      fontFamily: "Fira Mono",
      fontSize: 12
    }
  }, visible.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "90px 72px 130px 1fr",
      gap: 10,
      padding: "5px 16px",
      borderBottom: "1px solid rgba(255,255,255,0.02)",
      color: "rgb(209,209,209)"
    },
    onClick: () => onOpenContainer?.(l.src)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(116,116,116)"
    }
  }, l.t), /*#__PURE__*/React.createElement("span", {
    style: {
      color: color[l.lvl] || "rgb(139,139,139)",
      fontWeight: 500
    }
  }, l.lvl), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(145,200,239)",
      cursor: "pointer"
    }
  }, l.src), /*#__PURE__*/React.createElement("span", null, l.msg)))));
}

// -------- OVERVIEW
function OverviewView({
  app
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 24px",
      display: "grid",
      gap: 16,
      gridTemplateColumns: "2fr 1fr"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Live usage"
  }, /*#__PURE__*/React.createElement(MiniSpark, null)), /*#__PURE__*/React.createElement(Card, {
    title: "This month"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Total requests",
    value: "1,248,429",
    delta: "+12.4%",
    positive: true
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "p95 latency",
    value: "612ms",
    delta: "-3.2%",
    positive: true
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Error rate",
    value: "0.08%",
    delta: "+0.01%"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Cost \xB7 MTD",
    value: "$3,214.55",
    delta: "+8.1%"
  }))), /*#__PURE__*/React.createElement(Card, {
    title: "Recent deploys",
    span: 2
  }, /*#__PURE__*/React.createElement("div", null, [{
    sha: "3e3d98d",
    who: "erik",
    when: "2m ago",
    msg: "bump torch to 2.3.1",
    status: "success"
  }, {
    sha: "b107f12",
    who: "janet.k",
    when: "1h ago",
    msg: "add warm pool config",
    status: "success"
  }, {
    sha: "36f1a58",
    who: "akshar",
    when: "3h ago",
    msg: "rev stable-diffusion-xl checkpoint",
    status: "success"
  }, {
    sha: "0a535a1",
    who: "erik",
    when: "5h ago",
    msg: "experiment: 80GB tier",
    status: "danger"
  }].map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "10px 0",
      borderBottom: i < 3 ? "1px solid rgb(39,39,39)" : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: d.status === "success" ? "rgb(127,238,100)" : "rgb(248,113,113)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Fira Mono",
      fontSize: 12,
      color: "rgb(145,200,239)"
    }
  }, d.sha), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: "rgb(232,232,232)",
      fontSize: 13
    }
  }, d.msg), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "rgb(139,139,139)"
    }
  }, d.who), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "rgb(116,116,116)",
      width: 60,
      textAlign: "right"
    }
  }, d.when))))));
}
function Card({
  title,
  children,
  span
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: span === 2 ? "span 2" : undefined,
      background: "rgb(28,28,28)",
      border: "1px solid rgba(255,255,255,0.06)",
      borderRadius: 8,
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 13px Inter",
      color: "rgb(232,232,232)",
      marginBottom: 14
    }
  }, title), children);
}
function Stat({
  label,
  value,
  delta,
  positive
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "rgb(139,139,139)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Fira Mono",
      fontSize: 14,
      color: "rgb(232,232,232)"
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: positive ? "rgb(127,238,100)" : "rgb(248,113,113)"
    }
  }, delta)));
}
function MiniSpark() {
  const data = window.SPARK;
  const max = Math.max(...data);
  const W = 460,
    H = 120,
    pad = 8;
  const pts = data.map((v, i) => [pad + i / (data.length - 1) * (W - pad * 2), H - pad - v / max * (H - pad * 2)]);
  const line = pts.map((p, i) => `${i ? "L" : "M"} ${p[0]} ${p[1]}`).join(" ");
  const area = line + ` L ${pts[pts.length - 1][0]} ${H - pad} L ${pts[0][0]} ${H - pad} Z`;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgb(139,139,139)"
    }
  }, "Requests/min"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Fira Mono",
      fontSize: 22,
      color: "rgb(232,232,232)"
    }
  }, "62")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgb(139,139,139)"
    }
  }, "p95"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Fira Mono",
      fontSize: 22,
      color: "rgb(232,232,232)"
    }
  }, "612", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "rgb(139,139,139)"
    }
  }, "ms"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgb(139,139,139)"
    }
  }, "Active containers"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Fira Mono",
      fontSize: 22,
      color: "rgb(127,238,100)"
    }
  }, "12"))), /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    style: {
      width: "100%",
      height: 120
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "ar",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "rgb(127,238,100)",
    stopOpacity: "0.22"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "rgb(127,238,100)",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: "url(#ar)"
  }), /*#__PURE__*/React.createElement("path", {
    d: line,
    fill: "none",
    stroke: "rgb(127,238,100)",
    strokeWidth: "1.5"
  })));
}

// -------- METRICS (simple)
function MetricsView() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 24px",
      display: "grid",
      gap: 16,
      gridTemplateColumns: "1fr 1fr"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "CPU utilization"
  }, /*#__PURE__*/React.createElement(MiniSpark, null)), /*#__PURE__*/React.createElement(Card, {
    title: "GPU utilization"
  }, /*#__PURE__*/React.createElement(MiniSpark, null)), /*#__PURE__*/React.createElement(Card, {
    title: "Memory"
  }, /*#__PURE__*/React.createElement(MiniSpark, null)), /*#__PURE__*/React.createElement(Card, {
    title: "Request volume"
  }, /*#__PURE__*/React.createElement(MiniSpark, null)));
}

// -------- CONTAINERS
function ContainersView({
  onOpenContainer
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid rgb(39,39,39)",
      borderRadius: 8,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "rgb(36,36,36)"
    }
  }, ["Container", "Status", "Tier", "Region", "CPU", "MEM", "GPU", "Uptime", ""].map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      textAlign: i >= 4 && i <= 6 ? "right" : "left",
      padding: "8px 12px",
      font: "500 11px Inter",
      color: "rgb(139,139,139)",
      letterSpacing: "0.06em",
      textTransform: "uppercase"
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, window.CONTAINERS.map((c, i) => /*#__PURE__*/React.createElement("tr", {
    key: c.id,
    style: {
      borderTop: i === 0 ? 0 : "1px solid rgb(39,39,39)",
      cursor: "pointer"
    },
    onClick: () => onOpenContainer(c.id)
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 12px",
      fontFamily: "Fira Mono",
      fontSize: 12,
      color: "rgb(145,200,239)"
    }
  }, c.id), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 12px"
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    variant: c.status,
    dot: true
  }, c.label)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 12px",
      fontFamily: "Fira Mono",
      fontSize: 12,
      color: "rgb(209,209,209)"
    }
  }, c.tier), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 12px",
      fontFamily: "Fira Mono",
      fontSize: 12,
      color: "rgb(163,163,163)"
    }
  }, c.region), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 12px",
      textAlign: "right",
      fontFamily: "Fira Mono",
      fontSize: 12,
      color: "rgb(209,209,209)"
    }
  }, c.cpu, "%"), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 12px",
      textAlign: "right",
      fontFamily: "Fira Mono",
      fontSize: 12,
      color: "rgb(209,209,209)"
    }
  }, c.mem, "%"), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 12px",
      textAlign: "right",
      fontFamily: "Fira Mono",
      fontSize: 12,
      color: c.gpu > 85 ? "rgb(127,238,100)" : "rgb(209,209,209)"
    }
  }, c.gpu, "%"), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 12px",
      fontSize: 12,
      color: "rgb(139,139,139)"
    }
  }, c.uptime), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "more-horizontal",
    size: "sm"
  })))))))));
}
Object.assign(window, {
  AppDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AppDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/AppsTable.jsx
try { (() => {
// Apps list table view
function AppsTable({
  apps,
  onOpenApp
}) {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState([{
    k: "Env",
    v: "main"
  }]);
  const [sortBy, setSortBy] = useState("deployed");
  const filtered = apps.filter(a => {
    if (query && !a.name.toLowerCase().includes(query.toLowerCase())) return false;
    for (const f of filters) {
      if (f.k === "Env" && a.env !== f.v) return false;
      if (f.k === "Status" && a.statusLabel !== f.v) return false;
    }
    return true;
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Search apps",
    value: query,
    onChange: e => setQuery(e.target.value),
    style: {
      width: 280
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, filters.map((f, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      padding: "3px 4px 3px 8px",
      borderRadius: 12,
      border: "1px solid rgb(70,70,70)",
      color: "rgb(209,209,209)",
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(139,139,139)"
    }
  }, f.k, ":"), f.v, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 11,
    style: {
      cursor: "pointer",
      marginLeft: 4,
      color: "rgb(139,139,139)"
    },
    onClick: () => setFilters(filters.filter((_, j) => j !== i))
  }))), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: "plus"
  }, "Add filter")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: "arrow-up-down"
  }, "Sort"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: "download"
  }, "Export"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    icon: "plus"
  }, "Create app"))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid rgb(39,39,39)",
      borderRadius: 8,
      overflow: "hidden",
      background: "rgb(24,24,24)"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "rgb(36,36,36)",
      borderBottom: "1px solid rgb(24,24,24)"
    }
  }, [["", "w-6"], ["App name", null, "name"], ["Status"], ["Env"], ["Containers", "right"], ["Region"], ["Owner"], ["Tags"], ["Last deploy", null, "deployed"], ["Cost · 24h", "right", "cost"], [""]].map(([h, align, key], i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      textAlign: align === "right" ? "right" : "left",
      padding: i === 0 ? "8px 0 8px 12px" : "8px 12px",
      font: "500 11px Inter",
      color: "rgb(139,139,139)",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      cursor: key ? "pointer" : "default"
    },
    onClick: () => key && setSortBy(key)
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4
    }
  }, h, key === sortBy && /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 10
  })))))), /*#__PURE__*/React.createElement("tbody", null, filtered.map((a, rowIdx) => /*#__PURE__*/React.createElement(AppRow, {
    key: a.id,
    app: a,
    onOpen: () => onOpenApp(a),
    first: rowIdx === 0
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "rgb(139,139,139)"
    }
  }, "Showing ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(232,232,232)"
    }
  }, filtered.length), " of ", apps.length, " apps"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: "chevron-left",
    disabled: true
  }, "Prev"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconRight: "chevron-right"
  }, "Next"))));
}
function AppRow({
  app,
  onOpen,
  first
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("tr", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: onOpen,
    style: {
      borderTop: first ? "0" : "1px solid rgb(39,39,39)",
      background: hover ? "rgba(255,255,255,0.02)" : "transparent",
      cursor: "pointer",
      transition: "background 100ms ease"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "0 0 0 14px",
      width: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 14,
      height: 14,
      borderRadius: 3,
      border: "1px solid rgb(93,93,93)",
      opacity: hover ? 1 : 0.3
    }
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "package",
    size: 13,
    style: {
      color: "rgb(139,139,139)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(232,232,232)",
      fontWeight: 500,
      fontSize: 13
    }
  }, app.name))), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 12px"
    }
  }, /*#__PURE__*/React.createElement(Chip, {
    variant: app.status,
    dot: ["success", "info", "warning", "danger", "pink"].includes(app.status),
    icon: app.statusLabel === "Deploying" || app.statusLabel === "Building" ? "loader-2" : null
  }, app.statusLabel)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(163,163,163)",
      fontFamily: "Fira Mono",
      fontSize: 12
    }
  }, app.env)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 12px",
      textAlign: "right",
      fontFamily: "Fira Mono",
      fontSize: 12,
      color: "rgb(209,209,209)"
    }
  }, app.containers || /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(93,93,93)"
    }
  }, "0")), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 12px",
      color: "rgb(163,163,163)",
      fontFamily: "Fira Mono",
      fontSize: 12
    }
  }, app.region), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: app.owner.initials,
    color: app.owner.color,
    size: 22
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "rgb(163,163,163)"
    }
  }, app.owner.name))), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      flexWrap: "wrap"
    }
  }, app.tags.slice(0, 2).map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t)), app.tags.length > 2 && /*#__PURE__*/React.createElement(Tag, null, "+", app.tags.length - 2))), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 12px",
      color: "rgb(139,139,139)",
      fontSize: 12,
      whiteSpace: "nowrap"
    }
  }, app.deployed), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 12px",
      textAlign: "right",
      fontFamily: "Fira Mono",
      fontSize: 12,
      color: "rgb(232,232,232)"
    }
  }, app.cost), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "10px 12px 10px 0",
      width: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "more-horizontal",
    size: "sm"
  }))));
}
Object.assign(window, {
  AppsTable
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AppsTable.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Drawer.jsx
try { (() => {
// Right-edge drawer — container detail, elevation 10
function Drawer({
  open,
  containerId,
  onClose
}) {
  const container = window.CONTAINERS.find(c => c.id === containerId) || window.CONTAINERS[0];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.5)",
      opacity: open ? 1 : 0,
      pointerEvents: open ? "auto" : "none",
      transition: "opacity 200ms ease",
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      width: 480,
      background: "rgba(28,28,28,0.95)",
      backdropFilter: "blur(12px)",
      borderLeft: "1px solid rgba(255,255,255,0.06)",
      boxShadow: "-8px 0 24px rgba(0,0,0,0.4)",
      transform: open ? "translateX(0)" : "translateX(100%)",
      transition: "transform 220ms ease",
      zIndex: 60,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "package",
    size: 14,
    style: {
      color: "rgb(139,139,139)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Fira Mono",
      fontSize: 14,
      color: "rgb(145,200,239)"
    }
  }, container.id), /*#__PURE__*/React.createElement(Chip, {
    variant: container.status,
    dot: true
  }, container.label), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "external-link",
    size: "sm",
    title: "Open in new tab"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "x",
    size: "sm",
    onClick: onClose
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 20px",
      overflow: "auto",
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "110px 1fr",
      rowGap: 10,
      columnGap: 16,
      fontSize: 13
    }
  }, [["Tier", container.tier, true], ["Region", container.region, true], ["Uptime", container.uptime, false], ["Image", "sha256:3e3d98db72ef…", true], ["Started", "14:10:49 UTC", false], ["Memory", container.mem + "% of 40 GB", false], ["GPU util", container.gpu + "%", false]].map(([k, v, mono]) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "rgb(139,139,139)"
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "rgb(232,232,232)",
      fontFamily: mono ? "Fira Mono" : "Inter",
      fontSize: mono ? 12 : 13
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: "grid",
      gap: 14
    }
  }, [["CPU", container.cpu, "rgb(145,200,239)"], ["MEM", container.mem, "rgb(255,141,230)"], ["GPU", container.gpu, "rgb(127,238,100)"]].map(([label, val, c]) => /*#__PURE__*/React.createElement("div", {
    key: label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 11,
      color: "rgb(139,139,139)",
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(232,232,232)",
      fontFamily: "Fira Mono"
    }
  }, val, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      background: "rgb(47,47,47)",
      borderRadius: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: val + "%",
      background: c,
      borderRadius: 2
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "rgb(139,139,139)",
      marginBottom: 8
    }
  }, "Recent logs"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgb(20,20,20)",
      border: "1px solid rgb(39,39,39)",
      borderRadius: 6,
      padding: "8px 10px",
      fontFamily: "Fira Mono",
      fontSize: 11,
      lineHeight: 1.6
    }
  }, window.LOGS.filter(l => l.src === container.id).slice(0, 6).map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(116,116,116)"
    }
  }, l.t, " "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(145,200,239)"
    }
  }, l.lvl, " "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(209,209,209)"
    }
  }, l.msg)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 20px",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: "terminal"
  }, "Open shell"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: "refresh-cw"
  }, "Restart"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    icon: "square"
  }, "Stop"))));
}
Object.assign(window, {
  Drawer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Drawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/data.js
try { (() => {
// Mock data for the Modal app UI kit.

const WORKSPACE = {
  name: "modal-labs",
  color: "rgb(127,238,100)"
};
const USERS = [{
  initials: "ER",
  color: "rgb(127,238,100)",
  name: "erik"
}, {
  initials: "JK",
  color: "rgb(255,141,230)",
  name: "janet.k"
}, {
  initials: "AS",
  color: "rgb(145,200,239)",
  name: "akshar"
}, {
  initials: "MN",
  color: "rgb(255,171,94)",
  name: "mina.n"
}, {
  initials: "DT",
  color: "rgb(255,234,113)",
  name: "devon.t"
}];
const APPS = [{
  id: "ap-001",
  name: "diffusion-inference",
  env: "main",
  status: "success",
  statusLabel: "Running",
  containers: 12,
  region: "us-east-1",
  deployed: "2m ago",
  cost: "$123.45",
  owner: USERS[0],
  tags: ["gpu", "inference", "production"]
}, {
  id: "ap-002",
  name: "rag-pipeline",
  env: "main",
  status: "info",
  statusLabel: "Building",
  containers: 0,
  region: "us-west-2",
  deployed: "14m ago",
  cost: "$42.10",
  owner: USERS[1],
  tags: ["rag", "retrieval"]
}, {
  id: "ap-003",
  name: "llama-3-8b",
  env: "main",
  status: "success",
  statusLabel: "Running",
  containers: 4,
  region: "eu-central-1",
  deployed: "1h ago",
  cost: "$1,204.80",
  owner: USERS[2],
  tags: ["gpu", "llm"]
}, {
  id: "ap-004",
  name: "whisper-batch",
  env: "staging",
  status: "danger",
  statusLabel: "Failed",
  containers: 0,
  region: "us-east-1",
  deployed: "5h ago",
  cost: "$0.00",
  owner: USERS[0],
  tags: ["audio", "batch"]
}, {
  id: "ap-005",
  name: "embeddings-service",
  env: "main",
  status: "success",
  statusLabel: "Running",
  containers: 2,
  region: "us-east-1",
  deployed: "3d ago",
  cost: "$87.32",
  owner: USERS[3],
  tags: ["embeddings"]
}, {
  id: "ap-006",
  name: "nightly-finetune",
  env: "main",
  status: "warning",
  statusLabel: "Scaling",
  containers: 8,
  region: "us-east-1",
  deployed: "22m ago",
  cost: "$452.00",
  owner: USERS[4],
  tags: ["training", "gpu"]
}, {
  id: "ap-007",
  name: "stable-diffusion-xl",
  env: "production",
  status: "pink",
  statusLabel: "Stopped",
  containers: 0,
  region: "us-west-2",
  deployed: "1d ago",
  cost: "$0.00",
  owner: USERS[1],
  tags: ["gpu", "sdxl"]
}, {
  id: "ap-008",
  name: "webhook-relay",
  env: "main",
  status: "success",
  statusLabel: "Running",
  containers: 1,
  region: "us-east-1",
  deployed: "12m ago",
  cost: "$4.20",
  owner: USERS[2],
  tags: ["webhook"]
}, {
  id: "ap-009",
  name: "audio-transcription",
  env: "main",
  status: "info",
  statusLabel: "Deploying",
  containers: 0,
  region: "us-east-1",
  deployed: "just now",
  cost: "$0.00",
  owner: USERS[3],
  tags: ["audio"]
}, {
  id: "ap-010",
  name: "data-quality-monitor",
  env: "staging",
  status: "success",
  statusLabel: "Running",
  containers: 1,
  region: "us-east-1",
  deployed: "6h ago",
  cost: "$12.88",
  owner: USERS[4],
  tags: ["monitoring"]
}];

// Log lines for the detail view
const LOGS = [{
  t: "14:10:49",
  lvl: "INFO",
  src: "fa-1248429",
  msg: "starting container · image sha256:3e3d98db…"
}, {
  t: "14:10:49",
  lvl: "INFO",
  src: "fa-1248429",
  msg: "pulling layer 1/7 (43.2 MB)"
}, {
  t: "14:10:50",
  lvl: "INFO",
  src: "fa-1248429",
  msg: "pulling layer 7/7 · done"
}, {
  t: "14:10:51",
  lvl: "INFO",
  src: "fa-1248429",
  msg: "booting python 3.11"
}, {
  t: "14:10:52",
  lvl: "INFO",
  src: "fa-1248429",
  msg: "torch.cuda.is_available() → True (A100-40GB)"
}, {
  t: "14:10:52",
  lvl: "INFO",
  src: "fa-1248429",
  msg: "loading checkpoint stable-diffusion-xl-base-1.0"
}, {
  t: "14:10:58",
  lvl: "INFO",
  src: "fa-1248429",
  msg: "checkpoint loaded in 5.8s"
}, {
  t: "14:11:02",
  lvl: "INFO",
  src: "fa-1248429",
  msg: "accepting requests on :8000"
}, {
  t: "14:11:04",
  lvl: "REQ",
  src: "fa-1248429",
  msg: "POST /infer · 200 · 612ms"
}, {
  t: "14:11:07",
  lvl: "REQ",
  src: "fa-1248429",
  msg: "POST /infer · 200 · 598ms"
}, {
  t: "14:11:09",
  lvl: "WARN",
  src: "fa-1248429",
  msg: "slow step detected: vae_decode 842ms"
}, {
  t: "14:11:11",
  lvl: "REQ",
  src: "fa-1248429",
  msg: "POST /infer · 200 · 623ms"
}, {
  t: "14:11:14",
  lvl: "REQ",
  src: "fa-1248429",
  msg: "POST /infer · 200 · 601ms"
}, {
  t: "14:11:18",
  lvl: "ERROR",
  src: "fa-1248430",
  msg: "OOM during diffusion step 32/50 · retrying on larger tier"
}, {
  t: "14:11:21",
  lvl: "INFO",
  src: "fa-1248430",
  msg: "scaling up: A100-40GB → A100-80GB"
}, {
  t: "14:11:28",
  lvl: "INFO",
  src: "fa-1248430",
  msg: "new container fa-1248431 online"
}, {
  t: "14:11:30",
  lvl: "REQ",
  src: "fa-1248431",
  msg: "POST /infer · 200 · 588ms"
}, {
  t: "14:11:34",
  lvl: "REQ",
  src: "fa-1248431",
  msg: "POST /infer · 200 · 592ms"
}];

// Containers table for drawer
const CONTAINERS = [{
  id: "fa-1248429",
  status: "success",
  label: "Running",
  tier: "A100-40GB",
  region: "us-east-1",
  cpu: 12,
  mem: 42,
  gpu: 87,
  uptime: "11m 18s"
}, {
  id: "fa-1248431",
  status: "success",
  label: "Running",
  tier: "A100-80GB",
  region: "us-east-1",
  cpu: 18,
  mem: 51,
  gpu: 92,
  uptime: "8s"
}, {
  id: "fa-1248427",
  status: "info",
  label: "Starting",
  tier: "A100-40GB",
  region: "us-east-1",
  cpu: 0,
  mem: 0,
  gpu: 0,
  uptime: "—"
}, {
  id: "fa-1248408",
  status: "pink",
  label: "Stopped",
  tier: "A100-40GB",
  region: "us-east-1",
  cpu: 0,
  mem: 0,
  gpu: 0,
  uptime: "14m"
}];

// 30-minute sparkline — request volume
const SPARK = Array.from({
  length: 30
}, (_, i) => {
  const base = 40 + Math.sin(i / 3) * 12 + Math.cos(i / 1.8) * 6;
  return Math.round(base + (i > 18 && i < 24 ? 22 : 0) + Math.random() * 4);
});
Object.assign(window, {
  WORKSPACE,
  USERS,
  APPS,
  LOGS,
  CONTAINERS,
  SPARK
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/data.js", error: String((e && e.message) || e) }); }

// ui_kits/app/primitives.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Shared UI primitives — Button, Chip, Tag, Input, Avatar, Icon
// All components consume tokens from colors_and_type.css.

const {
  useState,
  useRef,
  useEffect
} = React;

// Icon wrapper — uses the Lucide script tag loaded in <head>.
// Falls back to a small square placeholder if the icon isn't present yet.
function Icon({
  name,
  size = 14,
  color,
  style,
  className
}) {
  const ref = useRef(null);
  useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = "";
      const el = document.createElement("i");
      el.setAttribute("data-lucide", name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: {
          width: size,
          height: size,
          stroke: color || "currentColor"
        },
        nameAttr: 'data-lucide'
      });
    }
  }, [name, size, color]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: className,
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      ...style
    }
  });
}
function Button({
  variant = "outline",
  size = "md",
  icon,
  iconRight,
  children,
  onClick,
  disabled,
  loading,
  className = "",
  style = {}
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontFamily: "Inter",
    fontWeight: 500,
    fontSize: size === "sm" ? 12 : 14,
    height: size === "sm" ? 24 : size === "lg" ? 40 : 32,
    padding: size === "sm" ? "0 8px" : size === "lg" ? "0 16px" : "0 12px",
    borderRadius: 6,
    border: "1px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "background 150ms ease, border-color 150ms ease",
    opacity: disabled ? 0.4 : 1,
    fontFeatureSettings: "'cv11' on"
  };
  const variants = {
    primary: {
      background: "rgb(232,232,232)",
      color: "rgb(24,24,24)"
    },
    accent: {
      background: "rgb(127,238,100)",
      color: "rgb(45,67,39)"
    },
    danger: {
      background: "rgb(248,113,113)",
      color: "rgb(35,28,28)"
    },
    outline: {
      background: "transparent",
      borderColor: "rgb(70,70,70)",
      color: "rgb(209,209,209)"
    },
    ghost: {
      background: "transparent",
      color: "rgb(209,209,209)"
    },
    translucent: {
      background: "rgba(255,255,255,0.1)",
      borderColor: "rgba(255,255,255,0.2)",
      color: "#fff"
    }
  };
  const [hover, setHover] = useState(false);
  const hoverStyle = hover && !disabled ? variant === "primary" ? {
    background: "#fff"
  } : variant === "accent" ? {
    background: "rgb(145,249,115)"
  } : variant === "outline" ? {
    background: "rgba(255,255,255,0.06)",
    borderColor: "rgb(93,93,93)"
  } : variant === "ghost" ? {
    background: "rgba(255,255,255,0.06)"
  } : variant === "translucent" ? {
    background: "rgba(255,255,255,0.16)"
  } : {} : {};
  return /*#__PURE__*/React.createElement("button", {
    className: className,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...hoverStyle,
      ...style
    }
  }, loading && /*#__PURE__*/React.createElement(Icon, {
    name: "loader-2",
    size: 14,
    style: {
      animation: "spin 1s linear infinite"
    }
  }), !loading && icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 14
  }), children, iconRight && /*#__PURE__*/React.createElement(Icon, {
    name: iconRight,
    size: 14
  }));
}
function IconButton({
  icon,
  onClick,
  active,
  size = "md",
  title
}) {
  const dim = size === "sm" ? 24 : 32;
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    title: title,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: dim,
      height: dim,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: active ? "rgb(47,47,47)" : hover ? "rgba(255,255,255,0.06)" : "transparent",
      border: "1px solid " + (active ? "rgb(70,70,70)" : "transparent"),
      borderRadius: 6,
      color: "rgb(209,209,209)",
      cursor: "pointer",
      transition: "background 150ms ease"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: size === "sm" ? 12 : 14
  }));
}
const STATUS_COLORS = {
  success: {
    bg: "rgba(127,238,100,0.1)",
    fg: "rgb(127,238,100)"
  },
  info: {
    bg: "rgba(145,200,239,0.1)",
    fg: "rgb(145,200,239)"
  },
  warning: {
    bg: "rgba(255,171,94,0.1)",
    fg: "rgb(255,171,94)"
  },
  danger: {
    bg: "rgba(248,113,113,0.1)",
    fg: "rgb(248,113,113)"
  },
  pink: {
    bg: "rgba(255,141,230,0.1)",
    fg: "rgb(255,141,230)"
  },
  neutral: {
    bg: "rgb(47,47,47)",
    fg: "rgb(209,209,209)"
  }
};
function Chip({
  variant = "neutral",
  dot,
  icon,
  children,
  onClick,
  style = {}
}) {
  const c = STATUS_COLORS[variant];
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "Inter",
      fontSize: 12,
      fontWeight: 400,
      padding: "3px 8px",
      borderRadius: 12,
      background: c.bg,
      color: c.fg,
      cursor: onClick ? "pointer" : "default",
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "currentColor",
      boxShadow: variant === "success" ? "0 0 6px rgba(127,238,100,0.5)" : "none"
    }
  }), icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 11
  }), children);
}
function Tag({
  children,
  k,
  onRemove
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      fontFamily: "Inter",
      fontSize: 12,
      fontWeight: 500,
      padding: "3px 8px",
      borderRadius: 4,
      border: "1px solid rgb(70,70,70)",
      background: "rgb(28,28,28)",
      color: "rgb(209,209,209)"
    }
  }, k && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgb(139,139,139)",
      fontWeight: 400
    }
  }, k, ":"), children, onRemove && /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 11,
    style: {
      cursor: "pointer",
      marginLeft: 2,
      color: "rgb(139,139,139)"
    },
    onClick: onRemove
  }));
}
function Input({
  icon,
  placeholder,
  value,
  onChange,
  kbd,
  style = {},
  error
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: 32,
      padding: "0 10px",
      borderRadius: 8,
      background: "rgb(24,24,24)",
      border: "1px solid " + (error ? "rgb(248,113,113)" : focus ? "rgb(139,139,139)" : "rgb(47,47,47)"),
      color: "rgb(209,209,209)",
      fontFamily: "Inter",
      fontSize: 13,
      transition: "border-color 150ms ease",
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 14,
    style: {
      color: "rgb(139,139,139)"
    }
  }), /*#__PURE__*/React.createElement("input", {
    style: {
      background: "transparent",
      border: 0,
      outline: 0,
      color: "inherit",
      font: "inherit",
      flex: 1
    },
    placeholder: placeholder,
    value: value || "",
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }), kbd && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Fira Mono",
      fontSize: 10,
      fontWeight: 500,
      background: "rgb(47,47,47)",
      color: "rgb(116,116,116)",
      padding: "2px 5px",
      borderRadius: 3
    }
  }, kbd));
}
function Avatar({
  initials,
  color = "rgb(127,238,100)",
  size = 24,
  src
}) {
  if (src) {
    return /*#__PURE__*/React.createElement("img", {
      src: src,
      style: {
        width: size,
        height: size,
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.1)",
        objectFit: "cover"
      }
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      background: color,
      color: "rgb(24,24,24)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Inter",
      fontWeight: 500,
      fontSize: Math.floor(size * 0.42)
    }
  }, initials);
}
function Kbd({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Fira Mono",
      fontSize: 10,
      fontWeight: 500,
      background: "rgb(47,47,47)",
      color: "rgb(116,116,116)",
      padding: "2px 5px",
      borderRadius: 3
    }
  }, children);
}
function Menu({
  items,
  onSelect,
  header,
  minWidth = 220
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(28,28,28,0.95)",
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(255,255,255,0.06)",
      borderRadius: 8,
      padding: 6,
      boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
      minWidth
    }
  }, header && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "6px 10px",
      fontSize: 11,
      color: "rgb(139,139,139)"
    }
  }, header), items.map((item, i) => item === "-" ? /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: 1,
      background: "rgba(255,255,255,0.06)",
      margin: "4px 0"
    }
  }) : /*#__PURE__*/React.createElement(MenuItem, _extends({
    key: i
  }, item, {
    onClick: () => {
      item.onClick?.();
      onSelect?.(item);
    }
  }))));
}
function MenuItem({
  icon,
  label,
  kbd,
  active,
  onClick,
  right
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "7px 10px",
      borderRadius: 4,
      color: "rgb(209,209,209)",
      fontSize: 13,
      cursor: "pointer",
      background: active ? "rgb(39,39,39)" : hover ? "rgba(255,255,255,0.06)" : "transparent"
    }
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 14,
    style: {
      color: "rgb(139,139,139)"
    }
  }), /*#__PURE__*/React.createElement("span", null, label), (kbd || right) && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto"
    }
  }, right || /*#__PURE__*/React.createElement(Kbd, null, kbd)));
}
Object.assign(window, {
  Icon,
  Button,
  IconButton,
  Chip,
  Tag,
  Input,
  Avatar,
  Kbd,
  Menu,
  MenuItem,
  STATUS_COLORS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/primitives.jsx", error: String((e && e.message) || e) }); }

})();
