"use client";

import { useCallback, createContext, useState } from "react";

import FullCalendar from "@fullcalendar/react";
import { EventClickArg } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import { Box, Modal } from "@mui/material";

export default function Diary() {
  return (
    <div>
      <div className="Clendar w-full h-svh">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          locale={"ja"}
          initialView="dayGridMonth"
          height={"80%"}
        />
      </div>
      <div className="Event-Modal"></div>
    </div>
  );
}
